import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Stats as StatsType } from "../../types/Stats";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

interface GraphProps {
    type: string;
}

export const GraphComponent = ({ type }: GraphProps) => {

    const [stats, setstats] = useState<StatsType[]>([]);

    useEffect(() => {
        (async () => {
          const stats = await fetchStats();
          setstats(stats);
        })();
      }, []);

    const fetchStats = async () => {
        return (await axios.get(`http://localhost:5000/stats/${type}`)).data;
    };

    console.log(`http://localhost:5000/stats/stats`);

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart',
          },
        },
    };
      
    const labels = [];
    for(let i = 0; i < stats.length; i++) {
        labels.push(stats[i].name);
    }

    const data1 = [];
    for(let i = 0; i < stats.length; i++) {
        data1.push(stats[i].nb_visit_total);
    }

    const data2 = [];
    for(let i = 0; i < stats.length; i++) {
        data2.push(stats[i].nb_visit_month_total);
    }
      
    const data = {
        labels,
        datasets: [
          {
            label: labels[0],
            data: data1,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: labels[1],
            data: data2,
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
    };

    return <Bar options={options} data={data} />;
}