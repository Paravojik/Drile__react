
import './App.css';


import Header from '../Header/Header.js'
import Page1 from '../Page1/Page1.js'
import Page2 from '../Page2/Page2.jsx'
import BlackSquare from '../BlackSquare/BlackSquare.js'
import Page3 from '../Page3/Page3.js'
import Page4 from '../Page4/Page4.jsx'
import Footter from '../Footter/Footter.js'
function App() {
  return (

    
    <div className="App">
     <Header/>
     <BlackSquare/>
     <Page1/>
     <Page2/>
     <Page3/>
    <Page4/>
    <Footter/>
    </div>
  );
}

export default App;
