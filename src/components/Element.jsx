import React from 'react'

const Element = ({heading, number, graph}) => {
  return (
    <div className='flex justify-content items-center pl-8 space-x-2'>
        <span >{heading}</span>
        <span className='text-muted'>{number}</span>
        <span style={{width:'60px', height:'15px', backgroundColor:'#cccccc'}}>{graph}</span>
    </div>
  )
}

export default Element