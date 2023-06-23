import React,{Fragment, useState}  from 'react'

 
const Form = () => {

  const [datos, setDatos] =useState({

    nombre:"",
    apellido:"",
    Mail:"",
  }) 

const handleInputChange = (event) => {
//console.log(event.target.value)
setDatos({
  ...datos, 

  [event.target.name] : event.target.value
  
}
)

}

const enviarDatos = (event) =>{
event.preventDefault();
console.log(datos.nombre + ' ' + datos.apellido)
}

  return (
    <Fragment>
   <form className="row" onSubmit={enviarDatos}>
<h1>Contactanos<span></span></h1>

<div className='col-md-3'>
<input type="text" name="nombre" id="" placeholder='nombre'
onChange={handleInputChange}/>
</div>

<div className='col-md-3'>
<input type="text" name="apellido" id="" placeholder='apellido'
onChange={handleInputChange}/>
</div>

<div className='col-md-3'>


<input type="text" name="Mail" id="" placeholder='mail'
onChange={handleInputChange}/>
</div>

<textarea name="mensage" id="" cols="30" rows="10" placeholder=''/>
<button className='btn btn-primary'> enviar</button>



   </form>
      
   </Fragment>

  )
}

export default Form