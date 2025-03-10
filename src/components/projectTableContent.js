import React, {useState} from 'react'
import NavBar from "./navBar";
import MainContent from "./mainContent";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Box from "@mui/material/Box";

function createData(name, calories, fat, carbs, protein) {
    return {name, calories, fat, carbs, protein};
}



function ProjectTableContent() {
    const [tableData, setTableData] = React.useState([
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ]);

    return (
        <div className="projectTableContent">


            <Paper elevation={15} sx={{
                backgroundColor: 'white',
                '& > :not(style)': {
                    m: 1
                },

            }}>
                <label className="tableTitle">All Items </label>
                <TableContainer component={Paper}>
                    <Table style={{ width: 'calc(100% - 16px)' }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Dessert (100g serving)</TableCell>
                                <TableCell align="right">Calories</TableCell>
                                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>


            </Paper>


        </div>
    )
}

export default ProjectTableContent
