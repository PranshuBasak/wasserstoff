import OverviewChart from "../components/OverviewChart"
import OverviewInfo from "../components/OverviewInfo"
import OverviewMap from "../components/OverviewMap"


const Overview = () => {
  return (
    <div>
      <div className="flex-row md:flex ">
        <OverviewInfo />
        <OverviewMap />
      </div>
      
      <OverviewChart />
      <br />
    </div>
  )
}

export default Overview