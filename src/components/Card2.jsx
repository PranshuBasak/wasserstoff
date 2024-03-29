import Center from "./Center"



const Card2 = () => {
  return (
    <div className='card2 py-1'>
      <div className='mx-4'>
        <Center heading='Total earning' earning="$12,875" percentage="10" />
        <hr className='text-[#8676FF] m-1' />
        <Center heading='Sales' earning="$43,123" percentage="12" />
      </div>
    </div>
  )
}

export default Card2