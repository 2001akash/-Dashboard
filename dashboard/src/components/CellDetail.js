import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const CellDetail = ({ match }) => {
    const { cellId } = match.params;
    const [cellData, setCellData] = useState([]);

    useEffect(() => {
        axios.get(`/api/cell/${cellId}`)
            .then(response => {
                setCellData(response.data);
            });
    }, [cellId]);

    const lineData = (label, key) => ({
        labels: cellData.map(d => d.time),
        datasets: [{
            label: label,
            data: cellData.map(d => d[key]),
            borderColor: '#36A2EB'
        }]
    });

    return (
        <div>
            <h2>Cell ID {cellId}</h2>
            <div>
                <Line data={lineData('Voltage vs Time', 'voltage')} />
                <Line data={lineData('Current vs Time', 'current')} />
                <Line data={lineData('Capacity vs Time', 'capacity')} />
                <Line data={lineData('Temperature vs Time', 'temperature')} />
            </div>
        </div>
    );
};

export default CellDetail;
