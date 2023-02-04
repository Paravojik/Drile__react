import './Page4.css'
import "./Page4__cards/Page4__cards.css"
import data from './data2.json'
import Leftstr from '../img/page1__leftStr.png'
import Rightstr from '../img/page1__rightStr.png'
import img from './Page4__imgs/Page4__img1.png'
import img1 from './Page4__imgs/Page4__img.png'
import img2 from './Page4__imgs/Page4__img2.png'
import img3 from './Page4__imgs/Page4__img3.png'
import img4 from './Page4__imgs/Page4__img4.png'
import img5 from './Page4__imgs/Page4__img5.png'

import card__img1 from './Page4__imgs/Page4__cardImg1.png'
import card__img2 from './Page4__imgs/Page4__cardImg2.png'
import card__img3 from './Page4__imgs/Page4__cardImg3.png'
import card__img4 from './Page4__imgs/Page4__cardImg4.png'
import card__icon1 from './Page4__imgs/page2__card__img.png'
import card__icon2 from './Page4__imgs/page2__card__img2.png'
import card__icon3 from './Page4__imgs/page2__card__img3.png'
setTimeout(function(){
    document.getElementById('Page4__card__img__type1').src=card__img1
    document.getElementById('Page4__card__img__type2').src=card__img2
    document.getElementById('Page4__card__img__type3').src=card__img3
    document.getElementById('Page4__card__img__type4').src=card__img4
},100)

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
                         {   data.map(item=>
      <div className="Page4__card__type1">
      {/* <div className="Page4__extra__yellowCard">HOT</div>
<div className="Page4__extra__redCard">-5%</div> */}
<div className="Page4__catd__icons">
<div className="Page4__catd__icons__block">
<img className="Page4__catd__icons__icon" src={card__icon1} alt="" />
</div>

<div className="Page4__catd__icons__block">
<img className="Page4__catd__icons__icon" src={card__icon2} alt="" />
</div>
<div className="Page4__catd__icons__block">
<img className="Page4__catd__icons__icon" src={card__icon3} alt="" />
</div>
</div>

<img className="Page4__card__img" id={item.Page2__card__img} src={img} alt="" />
<div className="Page4__card__text">{item.name}</div>
<div className="Page4__card__price"> {item.price}</div>



</div>
                            )
                 }
                        </div>
                    </div>
            </div>
    )
}
export default Page4