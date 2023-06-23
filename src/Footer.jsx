import React from "react"
import { Link } from "react-router-dom";


const Footer = () => {
  return ( 
    <>
    <footer id="footer" className="bg-primary text-white py-4 mt-2" >
    <div className="container-fluid">
      <div className="row">
        <div className="d-flex justify-content-between align-items-center">
        <div className="">
          <h5 className="">STORE GROUP ONE</h5>
        </div>
        <div className="">
          <Link>Redes</Link>
        </div>
        </div>
      </div>
    </div>
</footer>
      


  </>
  )
}

export default Footer;