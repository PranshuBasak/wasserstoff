import { TbBuildingBank, TbBuildingCommunity, TbBuildingPavilion} from "react-icons/tb";
import { BiBuildings } from "react-icons/bi"
import {FaRegBuilding} from "react-icons/fa"
import {RiBuilding2Line} from "react-icons/ri"
// import Map from './Map';
import MapCard from "./MapCard";
import SvgMap from "./SvgMap";


const OverviewMap = () => {
  
  // Icons for Popovers 
  const chicagoIcon = (<TbBuildingBank />)
  const berlinIcon = (<TbBuildingCommunity />)
  const shangai = (<TbBuildingPavilion />)
  const gizaIcon = (<BiBuildings />)
  const queenIslandIcon = (<FaRegBuilding />)
  const manausIcon = (<RiBuilding2Line />)

  return (
    <div className='relative bg-[#EEF1FA] ' >

      <SvgMap className="w-96 h-96 sm:w-[1000px] sm:h-[650px]  sm:relative sm:top-[4%] sm:left-[-11%]" />
      {/* <Map /> */}
      <MapCard cls='top-[23%] ' iconBgColorCls='bg-sky-400' icon={chicagoIcon} heading="Chicago" number="98,320,300"/>
      <MapCard cls='top-[15%] left-[21em]' iconBgColorCls='bg-[#7BDDA2]' icon={berlinIcon} heading="Berline" number="76,541,106"/>
      <MapCard cls='top-[30%] left-[39em]' iconBgColorCls='bg-[#E8A5FF]' icon={shangai} heading="Shanghai" number="239,570,110"/>
      <MapCard cls='top-[36%] left-[24em]' iconBgColorCls='bg-[#FF7E7E]' icon={gizaIcon} heading="Giza" number="10,547,980"/>
      <MapCard cls='top-[61%] left-[43em]' iconBgColorCls='bg-sky-600' icon={queenIslandIcon} heading="Queenisland" number="6,097,321"/>
      <MapCard cls='top-[48%] left-[6em]' iconBgColorCls='bg-[#F8A243]' icon={manausIcon} heading="Manaus" number="12,320,300"/>     

    </div>
  )
}

export default OverviewMap