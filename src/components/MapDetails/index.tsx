import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Divider from '@mui/material/Divider';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Typography} from "@mui/material";

export default function MapDetails(stationDetail:any){

    const station = stationDetail.stationDetail;
    const readings = station?.readings

    return(
        <>
            <Typography variant={'h5'}>{station?.name}</Typography>
            <Divider/>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Prévisions</TableCell>
                            <TableCell align="right">Force</TableCell>
                            <TableCell align="right">direction</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {readings.map((reading:any) => (
                            <TableRow
                                key={reading.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {reading.timestamp}
                                </TableCell>
                                <TableCell align="right">{reading.force}</TableCell>
                                <TableCell align="right">{reading.dir}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>

    )
}