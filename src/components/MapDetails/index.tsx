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
import LineChart from '../LineChart';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import moment from 'moment'

const useStyles = makeStyles({
    margin: {
        margin: 16,
    },
});

type Props = {
    stationDetail: Anemometer
    onClose: () => void
}

export default function MapDetails({stationDetail, onClose}: Props) {
    const classes = useStyles();

    return(
        <>
            <Grid container alignItems={'center'} justifyContent={'space-between'}>
                <Grid item>
                    <Typography variant={'h5'} className={classes.margin}>{stationDetail?.name}</Typography>
                </Grid>
                <Grid item>
                    <IconButton aria-label="delete" onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Grid>
            </Grid>
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
                        {stationDetail?.readings?.map((reading:Readings, index:number) => (
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
            <Divider/>
            {
                stationDetail.readings && (
                    <>
                        <Typography variant={'h5'} className={classes.margin}>Evolution</Typography>
                        <div>
                            <LineChart wind={stationDetail.readings}/>
                        </div>

                    </>
                )
            }
        </>

    )
}