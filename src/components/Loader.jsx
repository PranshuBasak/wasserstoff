
const Loader = ({ circularBar, heading, number }) => {
    return (
        <div className='flex me-4'>
            {circularBar}
            <div className='text-blue-950 flex-row mx-3 font-roboto' >
                <h5 className='font-normal text-xl'>{number}</h5>
                <p className='font-light text-base'>{heading}</p>
            </div>
        </div>
    )
}

export default Loader