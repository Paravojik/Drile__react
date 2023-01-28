import "./Page2.css"
import Card1 from './Page2__cards/Page2__card1.js'
import Card2 from './Page2__cards/Page2__card2.js'
import Card3 from './Page2__cards/Page2__card3.js'
import Card4 from './Page2__cards/Page2__card4.js'
import Card5 from './Page2__cards/Page2__card5.js'
import Card6 from './Page2__cards/Page2__card6.js'
import Card7 from './Page2__cards/Page2__card7.js'
function Page2(){
    return(
        <div className="Page2">
            <div className="Page2__top">Best Seller Items</div>
            <div className="Page2__bot">
            <Card1/>
            <Card2/>
            <Card3/>
            <Card4/>
            <Card5/>
            <Card6/>
            <Card7/>
            </div>
          
        </div>
        
    )
}
export default Page2