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
import { makeStyles } from '@mui/styles';
import { windDirection} from "../../helpers/windDirection";
import moment from 'moment'

const useStyles = makeStyles({
    margin: {
        margin: 16,
    },
});

type Props = {
    stationDetail: Anemometer
}

export default function MapDetails({stationDetail}: Props) {
    const classes = useStyles();

    return(
        <>
            <Typography variant={'h5'} className={classes.margin}>{stationDetail?.name}</Typography>
            <Divider/>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Forecast</TableCell>
                            <TableCell align="right">Force</TableCell>
                            <TableCell align="right">Direction</TableCell>
                            <TableCell align="right">Wind Direction</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {stationDetail?.readings?.map((reading:any, index:number) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {moment(reading?.timestamp).format('LLLL')}
                                </TableCell>
                                <TableCell align="right">{reading?.force}</TableCell>
                                <TableCell align="right">{reading?.dir}</TableCell>
                                <TableCell align="right">{windDirection(reading?.dir)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>

    )
}