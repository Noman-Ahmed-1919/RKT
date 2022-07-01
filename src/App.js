import React from "react";
import './App.css';
import img1 from "./images/web-car.png"
import img2 from "./images/web-character-rkt.png"
import img3 from "./images/web-logo.png"
import img4 from "./images/web-car.png"
import img5 from "./images/web-character-allin.png"
import img6 from "./images/web-bottle.png"
import img7 from "./images/web-botones2.png"
import img10 from "./images/web-botones1.png"
import img8 from "./images/web-welcome.png"
import img9 from "./images/web-mintsoon.png"

function App() {
  return (
  <>

  <section id="sec1">
    
    <div className="container-fluid" style={{height:"100%"}}>
<div className="row" style={{height:"100%"}}>
  <div className="col" style={{minHeight:"100vh" ,height:"100%" }}>

 <div>
<img className="img3" src={img3}></img>
</div>

<div>
<img className="img8" src={img8}></img>
</div>

<div>
<img className="img9" src={img9}></img>
</div>

<div>
<img className="img7" src={img7}></img>
</div>

<div>
<img className="img10" src={img10}></img>
</div>

<div>
<img className="img1" src={img1}></img> 
</div>

<div>
<img className="img2" src={img2}></img>
    </div>

    <div>
<img className="img5" src={img5}></img>
</div>

<div>
<img className="img6" src={img6}></img>
</div>


</div>
</div>
    
    </div>
  

  </section >
  
  
  </>
  );
}

export default App
