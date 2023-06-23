//import Home from "./Home";
//import Mayorista from "./Mayorista";
//import Minorista from "./Minorista";
//import Contacto from "./Contacto"
//import Navbar from "./Navbar";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import {Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

/*Nuevo elementos*/
import HomeStore from "./component/HomeStore";
import NavbarStore from "./component/NavbarStore";
import Products from "./component/Products";
import Product from "./component/Product";
import CartStore from "./component/CartStore";
import Alert from "./component/Alert";
import Register from "./component/Register";
import { ProtectedRoute } from "./component/ProtectedRoute";
import Login from "./component/Login";
import { AuthProvider} from "./context/AuthContext";




function App() {
  return(
  
<div className="bg-slate-200  text-black center">
<AuthProvider>
<NavbarStore/>

<Routes>

        <Route  path="/" element={
        
        <ProtectedRoute>
            <HomeStore/>  
        </ProtectedRoute>
        }
/>

        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<Product/>}/>
        <Route path="/cart" element={<CartStore/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Alert" element={<Alert/>}/>
        <Route path="/Register" element={<Register/>}/>
       
</Routes>
</AuthProvider>
<ToastContainer/>
<Footer/>

</div>

  )
  
}

export default App;
