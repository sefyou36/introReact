import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import profileM from './assets/profileM.jpg'
import './App.css'

const App = () => {
  return (
    <div>
      <nav style={{ display: 'flex', justifyContent: 'flex-start', background: 'black', padding: '10px', width: '100%' }}>
        <ul style={{ display: "flex", color: "rgba(255, 255, 255, 0.87)", gap: 200 }}>
          <li>Acceuil</li>
          <li>A propos</li>
          <li>Nos Offres</li>
          <li>Nos References</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div style={{width:400,height: 250, borderRadius: 10, backgroundColor:"blue", display: "flex", justifyContent:"center", flexDirection:"column",marginTop:50}}>
          <img style={{width:50,height:50,borderRadius:25,position:"relative",top:45,left:50}} src={profileM} alt="imag" />
           <h4 style={{fontSize:"larger",color:"#ffffff"}}>Irene Roberts</h4>
           <h6 style={{color:"#ffffff"}}>Verified Buyer</h6>
           <p style={{color:'#ffffff'}}>"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."
           </p>
      </div>
      <div style={{width:400,height: 250, borderRadius: 10, backgroundColor:"blue", display: "flex", justifyContent:"center", flexDirection:"column",marginTop:50, marginLeft: 450, position: 'relative', bottom: 200
       }}>  <img style={{width:50,height:50,borderRadius:25,position:"relative",top:45,left:50}} src={profileM} alt="imag" />
        <h4 style={{fontSize:"larger",color:"#ffffff"}}>Irene Roberts</h4>
        <h6 style={{color:"#ffffff"}}>Verified Buyer</h6>
        <p style={{color:'#ffffff'}}>"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."
        </p>
      </div>
      <div style={{width:400,height: 250, borderRadius: 10, backgroundColor:"blue", display: "flex", justifyContent:"center", flexDirection:"column",marginTop:50, marginLeft: 900, position: 'relative', bottom: 400}}>
      <img style={{width:50,height:50,borderRadius:25,position:"relative",top:45,left:50}} src={profileM} alt="imag" />
            <h4 style={{fontSize:"larger",color:"#ffffff"}}>Irene Roberts</h4>
            <h6 style={{color:"#ffffff"}}>Verified Buyer</h6>
            <p style={{color:'#ffffff'}}>"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."
            </p>
      </div>

    </div>
  );
}

export default App;

