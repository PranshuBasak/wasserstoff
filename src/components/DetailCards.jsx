

const DetailCards = ({icon, heading, number}) => {
  return (
    <div className='d-flex flex-column align-items-center  mx-5'>
        <div className='bottom-icon'> {icon}</div>
        <span> {heading}</span>
        <h1>{number}</h1> 


    </div>
  )
}

export default DetailCards