
const Card = ({Icon, heading, number}) => {
  return (
    <div className='flex items-center my-3'>
        <div className=''>
          {Icon}
        </div>
        <div className='flex-row mx-3 text-blue-950/90' >
            <p className='font-normal'>{heading}</p>
            <p className='font-semibold'>{number}</p>
        </div>
    </div>
  )
}

export default Card;