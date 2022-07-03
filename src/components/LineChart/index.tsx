import {useState} from "react";
import { Line } from 'react-chartjs-2';
import moment from 'moment'
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

type Props = {
    wind: Readings[]
}

export default function LineChart({wind}:Props) {
    const [windData] = useState({
        labels: wind.map((time:Readings) => moment(time.timestamp).format('L')),
        datasets: [
            {
                label: "Wind Evolution",
                data: wind.map((wind:Readings) => wind.force),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 2,
                width: 300,
                height: 300
            },
        ],
    });

    return(
        <Line data={windData} options={{ maintainAspectRatio: false }}/>
    )
}