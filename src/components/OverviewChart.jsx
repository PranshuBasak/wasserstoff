import BarChart from "./BarChart"
import BubbleChart from "./BubbleChart"

const OverviewChart = () => {

  // const [userData, setUserData] = useState({
  //   labels: userdata.map((data) => data.year),
  //   datasets: [{
  //     label: "User Gained",
  //     data: userdata.map((data) => data.userGain)
  //   }],
  // })


  const SalesFigureToggle = () => {
    const salesfigure = document.getElementById('salesfigure').style;
    salesfigure.display = salesfigure.display === "block" ? "none" : "block";
  }
  
  
  return (
    <div className='bottom-chart flex mb-4 ' onClick={SalesFigureToggle}>
      <div className='mx-3'>
        <p className='heading ms-1 my-2'> Sales Figures</p>
        <p className='salevalue' >$10,430</p>
      </div>
      {/* Chart at bottom */}
      <div className='bottom-bar-chart flex-row'>
        <BarChart />
      </div>

      {/* Sales figure is Circular Chart */}
      <div id='salesfigure'>
        <BubbleChart />
      </div>
    </div>
  )
}

export default OverviewChart