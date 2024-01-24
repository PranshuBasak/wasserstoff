import DashHero from '../components/DashHero'
import DashSidebar from '../components/DashSidebar'

const Dashboard = () => {
  return (
    <div className='bg-second flex-row md:flex'>

        <DashSidebar />
        <DashHero />
    </div>
  )
}

export default Dashboard