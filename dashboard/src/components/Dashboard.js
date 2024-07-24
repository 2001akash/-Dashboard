import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

const Dashboard = () => {
    const [sohData, setSohData] = useState([]);

    useEffect(() => {
        axios.get('/api/soh')
            .then(response => {
                setSohData(response.data);
            });
    }, []);

    const pieData = {
        labels: sohData.map(d => `Cell ID ${d.cell_id}`),
        datasets: [{
            data: sohData.map(d => d.soh),
            backgroundColor: ['#FF6384', '#36A2EB']
        }]
    };

    return (
        <div>
            <h2>State of Health</h2>
            <Pie data={pieData} />
        </div>
    );
};

export default Dashboard;
