import { FaGreaterThan } from 'react-icons/fa';
import { RiBarChartFill, RiVipCrownLine } from 'react-icons/ri';
import { BiTrendingUp } from 'react-icons/bi';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Card from './Card';
import Loader from './Loader';

const OverviewInfo = () => {

  
  const active_users_chart = (
    <CircularProgressbar
      className='w-20'
      value={27}
      text={`${27}%`}
      strokeWidth={5}
      styles={buildStyles({
        pathColor: "blue",
        textColor: "black",
        textSize: "1.8rem",
        fontWeight: "700"
      })}
    />
  );

  const new_users_chart = (
    <CircularProgressbar
      className='w-20'
      value={67}
      text={`${67}%`}
      strokeWidth={5}
      styles={buildStyles({
        pathColor: '#18AB39',
        textColor: "black",
        textSize: "1.8rem",
        fontWeight: "700"
      })}
    />
  );

  return (
    <div className='left'>
      <h4 className='my-3 font-archivo font-medium'>WSTF FRONT-END HACKATHON</h4>

      <div className='my-4'>
        <h6 className='inline font-medium text-md text-blue-900'>All Users &nbsp;&nbsp;</h6>
        <p className='inline font-medium text-xs ml-4 text-blue-900 cursor-pointer'>
          DETAIL&nbsp;
          <FaGreaterThan className="relative inline  w-2" />
        </p>
        <h1 className='text-5xl text-[#3F3C73] font-medium mb-10'>2,431,340</h1>
      </div>

      <div className='flex flex-col my-3'>
        <Card 
          Icon={
            <div className='w-12 h-12 bg-[#8776FF] rounded-xl flex items-center justify-center'>
              <BiTrendingUp className='' size={20} color={'white'} />
            </div>
          } 
          heading={'Total Earning'} 
          number={'540,549'} 
        />
        <Card 
          Icon={
            <div className='w-12 h-12 bg-[#65C9FD] rounded-xl flex items-center justify-center'>
              <RiVipCrownLine className='' size={20} color={'white'} />
            </div>
          } 
          heading={'Sales'} 
          number={'1,205,667'} 
        />
        <Card 
          Icon={
            <div className='w-12 h-12 text-center bg-[#FF9065] rounded-xl flex items-center justify-center'>
              <RiBarChartFill size={20} color={'white'} />
            </div>
          } 
          heading={'Purchase'} 
          number={'48,430,039'} 
        />
      </div>

      <div className='flex my-10'>
        <Loader circularBar={active_users_chart} heading={'Active Users'} number={'92,980'} percentage={27} />
        <Loader circularBar={new_users_chart} heading={'New Users'} number={'22,652'} percentage={67} />
      </div>
    </div>
  )
}

export default OverviewInfo;
