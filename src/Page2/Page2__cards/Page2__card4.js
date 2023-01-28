import "./Page2__cards.css"
import img from "../page2__imgs/page2__img4.png"
import card__icon1 from '../page2__imgs/page2__card__img.png'
import card__icon2 from '../page2__imgs/page2__card__img2.png'
import card__icon3 from '../page2__imgs/page2__card__img3.png'
function Page2__card1(){
    return(
        <div className="Page2__card__type1">
                          <div className="Page2__extra__yellowCard">HOT</div>
                {/* <div className="Page2__extra__redCard">-5%</div> */}
                <div className="Page2__catd__icons">
                    <div className="Page2__catd__icons__block">
                    <img className="Page2__catd__icons__icon" src={card__icon1} alt="" />
                    </div>
                
                    <div className="Page2__catd__icons__block">
                    <img className="Page2__catd__icons__icon" src={card__icon2} alt="" />
                    </div>
                    <div className="Page2__catd__icons__block">
                    <img className="Page2__catd__icons__icon" src={card__icon3} alt="" />
                    </div>
                </div>

               <img className="Page2__card__img" src={img}alt="" />
                <div className="Page2__card__text">Klosh Wall Clock</div>
                <div className="Page2__card__price">$80.00 – $129.00</div>


  
        </div>
    )
}
export default Page2__card1