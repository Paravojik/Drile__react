import './Page4.css'
import Leftstr from '../img/page1__leftStr.png'
import Rightstr from '../img/page1__rightStr.png'
import img from './Page4__imgs/Page4__img1.png'
import img1 from './Page4__imgs/Page4__img.png'
import img2 from './Page4__imgs/Page4__img2.png'
import img3 from './Page4__imgs/Page4__img3.png'
import img4 from './Page4__imgs/Page4__img4.png'
import img5 from './Page4__imgs/Page4__img5.png'

import Card1 from './Page4__cards/Page4__card1.js'
import Card2 from './Page4__cards/Page4__card2.js'
import Card3 from './Page4__cards/Page4__card3.js'
import Card4 from './Page4__cards/Page4__card4.js'
function Page4(){
    return(
            <div className='Page4'>
                <div className='Page4__text'>TRENDING CATEGORIES</div>
                <div className='Page4__top'>
                    <img className='Page4__top__Str' src={Leftstr} alt="" />
                    <div className='Page4__top__categories'>
                        <div className='Page4__top__categories__item Page4__top__categories__currentItem'>
                            <img className='Page4__top__categories__item__img' src={img} alt="" />
                            <div className='Page4__top__categories__item__text'>DRESSING TABLE</div>
                        </div>
                        <div className='Page4__top__categories__item'>
                        <img className='Page4__top__categories__item__img' src={img1} alt="" />
                            <div className='Page4__top__categories__item__text'>LAMP </div>
                        </div>
                        <div className='Page4__top__categories__item'>
                        <img className='Page4__top__categories__item__img' src={img2} alt="" />
                            <div className='Page4__top__categories__item__text'>CABINET</div>
                        </div>
                        <div className='Page4__top__categories__item Page4__top__categories__item2'>
                        <img className='Page4__top__categories__item__img' src={img3} alt="" />
                            <div className='Page4__top__categories__item__text'>SOFA</div>
                        </div>
                        <div className='Page4__top__categories__item Page4__top__categories__item2'>
                        <img className='Page4__top__categories__item__img' src={img4} alt="" />
                            <div className='Page4__top__categories__item__text'>CHAIR</div>
                        </div>
                        <div className='Page4__top__categories__item Page4__top__categories__item2'>
                        <img className='Page4__top__categories__item__img' src={img5} alt="" />
                            <div className='Page4__top__categories__item__text'>BED</div>
                        </div>
                    </div>
                    <img className='Page4__top__Str' src={Rightstr} alt="" />
                </div>
                    <div className='Page4__bot'>
                        <div className='Page4__bot__main'>

                            <Card1/>
                            <Card2/>
                            <Card3/>
                            <Card4/>
                        </div>
                    </div>
            </div>
    )
}
export default Page4