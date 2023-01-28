import './Footter.css'

// import $ from 'jquery';

import bg from './footter__bgImg.png'
import img1 from '../img/footter__img1.png'
import img2 from '../img/footter__img2.png'
import img3 from '../img/footter__img3.png'

// $('.Footter').css('backgroundImage','url('+bg+')')
function Footter(){
    return(
        <div className='Footter' id='Footter' style={ {backgroundImage:'url('+bg+')'}}>
            <div className='Footter__text'>Drile</div>
            <div className='Footter__main'>
                <div className='Footter__main__left'>
                    <div className='Footter__main__left__collum'>
                        <div className='Footter__main__left__collum__text1'>ABOUT US</div>
                        <div className='Footter__main__left__collum__text2'>About Us</div>
                        <div className='Footter__main__left__collum__text2'>Contact Us</div>
                        <div className='Footter__main__left__collum__text2'>Privacy Policy</div>
                        <div className='Footter__main__left__collum__text2'>Terms of Service</div>
                    </div>
                    <div className='Footter__main__left__collum'>
                        <div className='Footter__main__left__collum__text1'>COMPANY</div>
                        <div className='Footter__main__left__collum__text2'>Explore World</div>
                        <div className='Footter__main__left__collum__text2'>Trending Video</div>
                        <div className='Footter__main__left__collum__text2'>Book a Trip</div>
                        <div className='Footter__main__left__collum__text2'>Visit Gallery</div>
                    </div>
                </div>
                <div className='Footter__main__left'>
                <div className='Footter__main__left__collum'>
                        <div className='Footter__main__left__collum__text1'>USEFUL LINKS</div>
                        <div className='Footter__main__left__collum__text2'>Buy this theme</div>
                        <div className='Footter__main__left__collum__text2'>Drile Landing</div>
                        <div className='Footter__main__left__collum__text2'>Documentation</div>
                        <div className='Footter__main__left__collum__text2'>Video tutorial</div>
                    </div>
                    <div className='Footter__main__left__collum'>
                        <div className='Footter__main__left__collum__text1'>FOLLOW US</div>
                        <div className='Footter__main__left__collum__text2'>
                            <img className='Footter__main__left__collum__text3__img' src={img1} alt="" />
                            Facebook</div>
                        <div className='Footter__main__left__collum__text2'>
                        <img className='Footter__main__left__collum__text3__img' src={img2} alt="" />
                            Twitter</div>
                        <div className='Footter__main__left__collum__text2'>
                        <img className='Footter__main__left__collum__text3__img' src={img3} alt="" />
                            Instagram</div>
                       
                    </div>
                </div>
            </div>
            <div className='Footter__bot'>© Copyright 2023 | drile | All right reserved.</div>
        </div>
    )
}
// let Footter1=document.getElementById('Footter')
// Footter1.style.backgroundImage =`url(`+bg+`)`
export default Footter