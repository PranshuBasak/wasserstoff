import BubbleResponsive from "./BubbleResponsive"
import BubbleSVG from "./BubbleSVG"
import Informer from "./Informer"
import Timeline from "./Timeline"




const DashHero = () => {
  return (
    <div className='main'>
      <Timeline />  
      <Informer />      

      {/* <BubbleSVG /> */}
      <BubbleResponsive />

    </div>
  )
}

export default DashHero