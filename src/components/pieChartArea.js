import React, {useCallback, useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import {Paper} from "@mui/material";
import {toast} from 'react-toastify';
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Legend,
    Tooltip
} from 'recharts';

import {getProjects} from '../services/projects';

const COLORS = ['#43a047', '#e74c3c', '#ff8000', '#b45f55'];

function PieChartArea() {
    const [data, setData] = useState([]);

    const onGetProjects = useCallback(() => {
        getProjects()
            .then(response => {
                if (response) {
                    let projectData = response.map((item) => {
                        return {name: item.name, value: item.count}
                    });
                    setData(projectData);
                }
            })
            .catch(e => toast.error(e.message));
    }, []);

    useEffect(() => {
        onGetProjects();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <Paper elevation={3} sx={{
            margin: '8px',
            '&:hover': {
                cursor: 'pointer'
            }
        }}>

                <Box sx={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white'

                }}>
                    <Paper elevation={6} sx={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'white'

                    }}>
                        <Box sx={{width: 400, height: '100%', minHeight: 250 }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart width={400} height={330}>
                                    <Pie
                                        data={data}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {data.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={COLORS[index % COLORS.length]}
                                            />
                                        ))}
                                    </Pie>
                                    <Legend
                                        layout="vertical"
                                        verticalAlign="top"
                                        align="right"
                                    />
                                    <Tooltip/>
                                </PieChart>
                            </ResponsiveContainer>
                        </Box>
                    </Paper>
                </Box>

        </Paper>

    )
}

export default PieChartArea
