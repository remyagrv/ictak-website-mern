import { useEffect, useState } from 'react';
import './chart.css';
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);

function Chart(props) {
  const [data, setData] = useState({
    datasets: [{
        data: [8, 32, 29,20],
        backgroundColor:[
          'green',
          'blue',
          'red',
          'grey'
        ]
    },
  ],
  labels: [
      'Total Courses',
      'Student Registrations',
      'Total Admin',
      'Total Staffs'
  ], 
  });
  const loadData = async() => {
    try {
      const response = await fetch("api/dashboard/graph");
      if (response.status !== 500) {
        const body = await response.json();
        setData(body);
      }
    } catch {

    }
  }
  useEffect(()=> loadData(), []);

  return (
    <div className='Chart' style={{alignItems:'center', width:'40%', height:'40%'}}>
            <br></br>
            <br></br>

      <h2 className="Chart-title">ICT LIVE STATUS</h2>
      <br></br>
      <Doughnut data={data}/>
    </div>
  );
}

export default Chart;