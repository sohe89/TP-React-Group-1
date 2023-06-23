import React from "react";
import {NavLink} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from "react-redux";

const NavbarStore = () => {
  const {cartTotalQuantity} = useSelector(state=>state.cart);
    return (
    <>
    <Navbar >
      <Container>
        <div className="d-flex flex-column flex-sm-row w-100">
        <Navbar.Brand>
         STORE GROUP ONE
      </Navbar.Brand>
        <Navbar className="w-100">
          <Nav id="NavbarStore" className="me-auto d-lg-flex d-md-flex flex-column flex-md-row flex-lg-row justify-content-md-between w-100">
            <div className="d-flex-column d-flex-md-row">
            <NavLink to={"/Products"} className="me-2">Products</NavLink> 
            <NavLink to={"/Register"} className="me-2">Registrarte</NavLink>
            <NavLink to={"../Login"} className="me-2">Iniciar Sesión</NavLink>
            </div>
            <div>
            <NavLink to={"../Cart"} className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
          }>Cart<span className="badge-light"> {cartTotalQuantity}</span></NavLink>
          </div>
          </Nav>
        </Navbar>
        </div>
      </Container>
    </Navbar> 
    </>

    );
}

export default NavbarStore;