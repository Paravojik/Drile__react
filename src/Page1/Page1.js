import "./Page1.css"
import logo1 from "../img/page1__img.png"
import logo2 from "../img/page1__leftStr.png"
import logo3 from "../img/page1__rightStr.png"
    function Main(){
        return (
            <div className="Page1">
                  <div className="Page1__left">
                  <img className="Page1__left__str" src={logo2} alt="" />
                  <img className="Page1__left__img" src={logo1} alt="" />
                  </div>
                  <div className="Page1__right">
                  <div className="Page1__right__text">
                  <div className="Page1__right__text__tx">Get ready for Our stylist chair</div>
                  <button className="Page1__right__text__btn">SHOP NOW</button>
                  
                  </div>
                  <img className="Page1__right__str Page1__left__str" src={logo3} alt="" />
                  </div>
            </div>
          );
    }
    export default Main;