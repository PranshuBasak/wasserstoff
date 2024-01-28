import DashHero from '../components/DashHero'
import DashSidebar from '../components/DashSidebar'

const Dashboard = () => {
  return (
    <div className='bg-[#f7f7f7] flex-row md:flex'>

        <DashSidebar />
        <DashHero />
    </div>
  )
}

export default Dashboard