import {VscTriangleUp} from 'react-icons/vsc'

const Center = ({ heading, earning, percentage }) => {
  return (
    <div className='mt-3 '>
      <p className='totalEarning'>{heading}</p>
      <h2 className='earning flex space-x-4'>
        {earning}
        <p className='flex greenUpsign2 items-center ' >&nbsp;&nbsp;
            <VscTriangleUp size={16} className=''/>
                {percentage}%
        </p>
      </h2> 
        
      <p className='text-muted2 m-2'>Compared to $21,490 last year</p>
    </div>
  )
}

export default Center