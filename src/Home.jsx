import React from 'react'
import {Navigate} from 'react-router-dom';


function Home(){
 const [goToContacto, setGoToContacto ] = React.useState(false); 
  if (goToContacto){
    return <Navigate to="/Contacto"/>;
    }
    return (
      <div className="container mt-9 ">
Venta de Productos 
<p> Nos especializamos en la elaboracion de </p>
<></>
      <button className='btn btn-primary'
      onClick={() =>{
        setGoToContacto(true);
      }}>
        {""}
      
        Contactanos </button>
      </div>   

  )


 


}

export default Home