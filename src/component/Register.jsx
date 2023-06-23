import {useState} from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';





export function Register() {

const [user, setUser] = useState({
  email: "",
  password: "",
});

const {signup} = useAuth()
const navigate = useNavigate()
//defino un estado
const [error, seterror] = useState()


 const handleChange = ({target: {name, value}}) =>{//propiedad target extraer el nombre y el valor
  setUser({...user, [name]: value})//actualiza el estado
 };

 const handleSumit = async (e) =>{//muestra lo que tiene

  e.preventDefault()//no se refresque la pag

 try {

await signup(user.email, user.password)
navigate('/')


//en esta parte realize una validacion para cada error que pueda llegar a suceder 

//correo sin @ contraseña insegura
}catch (error){
console.log(error.code);
if (error.code ==="auth/invalid-email"){
  
  
  seterror( 'este correo es invalido, por favor verificalo y vuelve a intentarlo')


}if (error.code ==="auth/weak-password"){
  seterror('tu contraseña es insegura, debe contener al menos 6 caracteres')
}

//seterror(error.message);
  
}

 }
 
 
 
  
  return (
    <div>



      {error &&<p>{error}</p>} 
    <form onSubmit={handleSumit}>
<div></div>

  <label htmlFor="email">Email</label>
  <input
   type="email"
    name="email" 
    placeholder="ejemploemail@gmail.com"
    className='border rounded mb-4 py-3 px-3'
     onChange={handleChange}/>


     <div></div>
  <label htmlFor="password">Contraseña</label>
  <input 
  type="password" 
  name="password"
  id="password"
  onChange={handleChange}
  placeholder='*********'
  className='border rounded mb-4 py-3 px-3'
  
  
  
  />

  <button>Registarme</button>

    </form>

    </div>


  )


  
  }

  
export default Register;