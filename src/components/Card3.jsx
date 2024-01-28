import BottomRow from "./BottomRow"


const Card3 = () => {
  return (
    <div className='card3 my-3 mb-10'>
      <table className='mx-4'>

        <BottomRow title="Travel" number1="23" number2="2342" up={true} />
        <BottomRow title="Presentation" number1="23" number2="23532" up={false} />
        <BottomRow title="Business" number1="54" number2="234" up={true} />
      </table>
    </div>
  )
}

export default Card3