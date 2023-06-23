import React from 'react'
import {Navigate} from 'react-router-dom';

function Mayorista(){
    
 const [goToMinorista, setGoToMinorista] = React.useState(false); 
  if (goToMinorista){
    return <Navigate to="/Minorista"/>;
    }
    return (
      <div className='container'>

 Mayorista
      <button
      onClick={() =>{
        setGoToMinorista(true);
      }}>
        {""}
        ir a comprar por menor </button>
      </div>   

  );
}

export default Mayorista