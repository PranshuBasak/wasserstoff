import OverHero from "../components/OverHero"
import OverSidebar from "../components/OverSidebar"


const Overview = () => {
  return (
    <div>
      <div className="flex-row md:flex">
        <OverSidebar />
        <OverHero />
      </div>
      {/* It is for rendering bottom barGraph on Main page */}
      {/* <OverviewBottom /> */}
      <br />
    </div>
  )
}

export default Overview