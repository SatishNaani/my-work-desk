import React, {useCallback, useEffect, useState} from 'react'
import NavBar from "./navBar";
import MainContent from "./mainContent";
import {toast} from 'react-toastify';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";


import {getTasks, getBugTasksIds} from '../services/projects';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories,fat };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];
function Bugs() {
    const [data, setData] = useState([]);

    const onGetTasks = useCallback(() => {
        getBugTasksIds()
            .then(response => {
                const WorkItems = response?.workItems.map(item => item.id) || [];
                getTasks({
                    "ids": WorkItems,
                    "fields": [
                        "System.Id",
                        "System.Title",
                        "System.WorkItemType",
                        "Microsoft.VSTS.Scheduling.RemainingWork",
                        "Microsoft.VSTS.Common.Severity"
                    ]
                })
            .then(response => {
                if (response) {
                    let projectData = (response?.value || []).map((item, index) => {
                        return {id: item.fields["System.Id"], title: item.fields["System.Title"], type: item.fields["System.WorkItemType"] }
                    });
                    setData(projectData);
                }
            }).catch(e => toast.error(e.message));
            })
            .catch(e => toast.error(e.message));
    }, []);

    useEffect(() => {
        onGetTasks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <Paper elevation={3} style={{flex: 1, maxHeight: '400px', overflow: 'auto' }}>
            <label className="tableTitle">Bugs</label>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                <TableHead>
                        <TableRow>
                            <TableCell>Type</TableCell>
                            <TableCell> ID </TableCell>
                            <TableCell> Description </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.type}
                                </TableCell>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.title}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Paper>

    )
}

export default Bugs
