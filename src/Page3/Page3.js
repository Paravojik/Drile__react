import './Page3.css'
import img1 from './Page3__imgs/Page3__img1.png'
import img2 from './Page3__imgs/Page3__img2.png'
import img3 from './Page3__imgs/Page3__img3.png'
import img4 from './Page3__imgs/Page3__img4.png'
import img5 from './Page3__imgs/Page3__img5.png'
function Page3(){
    return(
        <div className='Page3'>
           <div className='Page3__main'>
            <div className='Page3__main__left'>
                <div className='Page3__main__left__box'>
                <img className='Page3__main__left__img' src={img1} alt="" />
                </div>
                
            </div>
            <div className='Page3__main__right'>
                <div className='Page3__main__right__blueSign'>DEAL OF THE WEEK</div>
                <div className='Page3__main__right__text1'>from <span className='Page3__main__right__text1__span'>$99.99</span>
                </div>
                <div className='Page3__main__right__text2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget hendrerit odio, non ultrices lorem. Donec vel vestibulum eros. Curabitur fringilla arcu varius.</div>
                <button className='Page3__main__right__btn'>SHOP NOW</button>
                <div className='Page3__main__right__bot'>
                    <div className='Page3__main__right__bot__item'>
                        <img className='Page3__main__right__bot__item__img' src={img2} alt="" />
                    </div>
                    <div className='Page3__main__right__bot__item'>
                        <img className='Page3__main__right__bot__item__img' src={img3} alt="" />
                    </div>
                    <div className='Page3__main__right__bot__item'>
                        <img className='Page3__main__right__bot__item__img' src={img4} alt="" />
                    </div>
                    <div className='Page3__main__right__bot__item'>
                        <img className='Page3__main__right__bot__item__img' src={img5} alt="" />
                    </div>
                </div>
            </div>
            </div> 
        </div>
    )
}

export default Page3