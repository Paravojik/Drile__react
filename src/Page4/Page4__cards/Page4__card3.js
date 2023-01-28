import "./Page4__cards.css"
import img from '../Page4__imgs/Page4__cardImg3.png'
import card__icon1 from '../Page4__imgs/page2__card__img.png'
import card__icon2 from '../Page4__imgs/page2__card__img2.png'
import card__icon3 from '../Page4__imgs/page2__card__img3.png'
function Page4__card1(){
    return(
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

               <img className="Page4__card__img" src={img} alt="" />
                <div className="Page4__card__text">Hironpal Dressing Table</div>
                <div className="Page4__card__price">$350.00</div>


  
        </div>
    )
}
export default Page4__card1