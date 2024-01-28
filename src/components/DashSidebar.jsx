import Card2 from "./CArd2"
import Card1 from "./Card1"
import Card3 from "./Card3"



const DashboardSidebar = () => {
  return (
    <div className='sidebar '>
      <div className='ms-4'>
        <h3 className='dashSideHead'>Design Faster</h3>
        <Card1 />
        <Card2 />
        <Card3 />
      </div>  
    </div>
  )
}

export default DashboardSidebar