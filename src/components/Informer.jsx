
import './Informer.scss'
import {AiOutlineEye} from 'react-icons/ai'
import {RiBarChart2Fill} from 'react-icons/ri'
import {FiStopCircle} from 'react-icons/fi'
import DetailCards from './DetailCards'


const Informer = ({icon, }) => {

    const shoppingViewsIcon= <AiOutlineEye size={22} color='#4C5AA1' />
    const storeDynamicsIcon = <RiBarChart2Fill size={22} color='#4C5AA1' />
    const trendGooodsIcon = <FiStopCircle size={22} color='#4C5AA1' />
    return (
        <div className='bottomdetail flex justify-around gap-10 items-center'>
            <DetailCards icon={trendGooodsIcon} heading='Trend Goods' number="204"/>
            <DetailCards icon={shoppingViewsIcon} heading='Shopping Views' number="65,540"/>
            <DetailCards icon={storeDynamicsIcon} heading='Trending Goods' number="324"/>
        </div>
    )
}

export default Informer