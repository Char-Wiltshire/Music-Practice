import React, { use, useEffect, useState } from 'react';
import { getPracticeSessions } from '../api';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const PracticeList = () => {
    const [practiceSessions, setPracticeSessions] = useState([]);
    const [graphData, setGraphData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Practice Duration (hours)',
                data: [],
                fill: false,
                borderColor: 'rgba(75,192,192,1)',
                tension: 0.1,
            },
        ],
    });

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPracticeSessions();
            setPracticeSessions(data);
            generateGraphData(data);
        };
        fetchData();
    }, []);

    const generateGraphData = (data) => {
        const labels = [];
        const durations = [];

        if (data && data.length > 0) {
            data.forEach((session) => {
                labels.push(session.date);
                durations.push(session.duration);
            });

        setGraphData({
            labels,
            datasets: [
                {
                    label: 'Practice Duration (hours)',
                    data: durations,
                    fill: false,
                    borderColor: 'rgba(75,192,192,1)',
                    tension: 0.1,
                },
            ],
        });
    } else {
        setGraphData({
            labels: [],
            datasets: [
                {
                    label: 'Practice Duration (hours)',
                    data: [],
                    fill: false,
                    borderColor: 'rgba(75,192,192,1)',
                    tension: 0.1,
                },
            ],
        });
    }
};

    return (
        <div>
            <h2>Practice Sessions</h2>
            <ul>
                {practiceSessions.map((session) => (
                    <li key={session.id}>
                        {session.instrument} - {session.duration} hours on {session.date}
                    </li>
                ))}
            </ul>

            <h2>Weekly Practice Graph</h2>
            <Line data={graphData} />
        </div>
    );
};

export default PracticeList;