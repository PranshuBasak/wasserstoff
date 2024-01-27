// import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

const BarChart = () => {
  // return (
  //   <Bar
  //     data={chartdata}
  //   />
  // );
  const barHeights = [
    28, 23, 20, 20, 22, 15, 15, 20, 18, 15, 21, 21, 11, 21, 15, 15, 20, 15, 18, 15, 14, 20, 18, 14, 20, 18, 14, 20, 18, 14, 20, 18, 14, 20, 18, 14, 20, 18, 14, 20, 18, 14, 20, 18, 14, 20, 18, 14, 20, 18,
    28, 23, 20, 20, 22, 15, 15, 20, 18, 15, 21, 21, 11, 21, 15, 15, 20, 15, 18, 15, 14, 20, 18, 14, 20, 18, 14, 20
  ];

  return (
    <div className='me-2 flex-row'>
      <div className='barchart flex items-end custom-gap grow' >
        <div className='bars light-bars h-[18px]' />
        <div className='bars light-bars h-[22px]' />
        <div className='bars light-bars h-[23px]' />
        <div className='bars light-bars h-[14px]' />
        <div className='bars light-bars h-[15px]' />
        <div className='bars light-bars h-[20px]' />
        <div className='bars light-bars h-[21px]' />
        <div className='bars light-bars h-[11px]' />
        <div className='bars light-bars h-[28px]' />
        {barHeights.map((height, index) => (
          <div 
            key={index}
            className={`bars ${index < 20 || index >= 40 ? 'light-bars' : 'pink-bars'} h-[${height}px]`}
          />
        ))}
      </div>
      <hr className='bar-bottom-hr m-1'/>
    </div>
  )
};

export default BarChart;
