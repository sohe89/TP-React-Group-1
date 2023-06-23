import React from 'react'

import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
 
<header>
  <div className='container py-2'>
    <div className='row'>
      <div className='d-flex justify-content-between'>
      <div className="logo fw-bold">
       My Empresa

      </div>
  
      <div className="display-menu">

          <Link className='mx-2' to={"/"}>Home</Link>
          <Link className='mx-2' to={"/Mayorista"}>Mayorista</Link>
          <Link className='mx-2' to={"/Minorista"}>Minorista</Link>
          <Link className='mx-2' to={"/Contacto"}>Contacto</Link>
      </div>
      </div>

    </div>

  </div>
</header>

    
  
  )
}

export default Navbar;