import profileM from './assets/profileM.jpg'

const Card = () => {
    return (
        <div className='w-96 h-64 rounded-xl bg-indigo-900 flex justify-center flex-col my-12 '>
          <img className='w-12 h-12 rounded-3xl relative top-10 left-12'  src={profileM} alt="imag" />
           <h4 className='text-xl text-white '>Irene Roberts</h4>
           <h6 className='text-white  '>Verified Buyer</h6>
           <p className='text-white my-10'>"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."
           </p>
      </div>
    )
}
export default Card

// style={{width:400,height: 250, borderRadius: 10, backgroundColor:"blue", display: "flex", justifyContent:"center", flexDirection:"column",marginTop:50}}
// style={{width:50,height:50,borderRadius:25,position:"relative",top:45,left:50}}
// style={{fontSize:"larger",color:"#ffffff"}