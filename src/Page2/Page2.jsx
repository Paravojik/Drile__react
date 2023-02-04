import "./Page2.css"
import "./Page2__cards.css"
// import $ from 'jquery'
import data from './data.json'
import img1 from "./page2__imgs/page2__img.png"
import img2 from "./page2__imgs/page2__img2.png"
import img3 from "./page2__imgs/page2__img3.png"
import img4 from "./page2__imgs/page2__img4.png"
import img5 from "./page2__imgs/page2__img5.png"
import img6 from "./page2__imgs/page2__img6.png"
import img7 from "./page2__imgs/page2__img7.png"
import card__icon1 from './page2__imgs/page2__card__img.png'
import card__icon2 from './page2__imgs/page2__card__img2.png'
import card__icon3 from './page2__imgs/page2__card__img3.png'
console.log(data)
setTimeout(function(){
    document.getElementById('Page2__card__img__type1').src=img1
    document.getElementById('Page2__card__img__type2').src=img2
    document.getElementById('Page2__card__img__type3').src=img3
    document.getElementById('Page2__card__img__type4').src=img4
    document.getElementById('Page2__card__img__type5').src=img5
    document.getElementById('Page2__card__img__type6').src=img6
    document.getElementById('Page2__card__img__type7').src=img7
    // data.map(item=>{
    //     if(item.redSign!='none'){
    //         $(item.Page2__card__img).append('')
    //     }
    // })

},100)
 


function Page2(){
    return(
  
        <div className="Page2">
                 <div className="Page2__top">Best Seller Items</div>
                 <div className="Page2__bot">
            { 
            data.map(item=>
                    
                  
                         <div className="Page2__card__type1">
                                       <div className={item.yellow}>HOT</div>
                                       <div className={item.isTrue__redCard}>{item.redSign}</div>
              
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
             
                            <img className="Page2__card__img" id={item.Page2__card__img} src={img1}alt="" />
                                    <div className="Page2__card__text">{item.name}</div>
                             <div className="Page2__card__price">{item.price}</div>
             
             
               
                     </div>
                    
            )
   
        }
             </div>
        </div>
        
    )
}
export default Page2