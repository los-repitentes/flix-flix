import Input from "../Input/Input"
import { useState, useCallback, useEffect } from 'react'
import Logo from "../../assets/logo.svg"
import "./Login.css"
const Login = () => {

    const [variant, setVariant] = useState('login');
    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant == 'login' ? 'registro' : 'login');
    }, [])
    const inicial = {
      email: "",
      usr: "",
      password: "",
    };
  
    const [datos, setDatos] = useState(inicial);
    const cambio = (e) => {
      const { name, value } = e.target;
      setDatos({ ...datos, [name]: value });
      
    };
    useEffect(()=>{
      document.title = `Login`;

    },[])
    const env = async (e) => {
      e.preventDefault();
      // let log = document.getElementById("login");
      // log.innerHTML =
      //   '<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>';
      if (datos !== "") {
        const res = await fetch(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/auth.php`, {
          method: "POST",
          body: JSON.stringify(datos),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        console.log(data)
  
        // log.innerText = "Re intentar";
  
        // if (data.codigo_usuario) {
        //   const info = {
        //     email: data.email,
        //     id: data.codigo_usuario,
        //     cedula: data.cc,
        //     nombre: data.nombre,
        //     apellido: data.apellido,
        //     role: data.rol,
        //     telefono: data.telefono,
        //     municipio: data.municipio,
        //     direccion: data.direccion,
        //     pais: data.pais,
        //   };
  
        //   if (data.rol === "1") {
        //     sessionStorage.setItem("User", JSON.stringify(info));
        //     sessionStorage.setItem("IsAdmin", true);
        //     setIsadmin(true);
        //     history(`/home`);
        //   } else {
        //     localStorage.setItem("User", JSON.stringify(info));
        //     history("/");
        //   }
        // } else {
        //   let alerta = document.querySelector(".alert-danger");
        //   alerta.classList.remove("d-none");
        //   alerta.innerHTML = `${data.result.error_msg}`;
        // }
      }
    };

    

      return (
        <div className="relative h-full w-full fondo">
          <div className="bg-black w-full h-full lg:bg-opacity-50">
            <nav className='px-12 py-5'>
              <img src={Logo} alt="logo" className='h-12'/>
            </nav>
            <form onSubmit={env} className="flex justify-center w-full">
            <div className="flex justify-center">
              <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:max-w-md rounded-md w-full">
                <h2 className='text-white text-4xl mb-8 font-semibold'>
                  {variant == 'login' ? 'Inicia sesión' : 'Crea una cuenta'}
                </h2>
                <div className="flex flex-col gap-4">
                  {variant == 'registro' && (
                    <Input 
                      label='Username'
                      onChange={cambio}
                      id='name'
                      type='text'
                      name='usr'
                      // value={name}
                    />
                  )}
                  <Input 
                    label='Email '
                    onChange={cambio}
                    id='email'
                    name ='email'
                    type='email'
                    // value={email}
                  />
                  <Input 
                    label='Contraseña'
                    onChange={cambio}
                    id='password'
                    name='password'
                    type='password'
                    // value={password}
                  />
                </div>
                <button type="submit" className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
                  Iniciar 
                </button>
                <div className="text-neutral-500 text-sm mt-2 flex justify-between">
                  {/* <div className="">
                    <input type="checkbox" name="" id="recuerdame"/>
                    <label htmlFor='recuerdame' className='ms-1'>Recuérdame</label>
                  </div> */}
                  <span className='hover:underline hover:cursor-pointer'>¿Necesitas ayuda?</span>
                </div>
                <p className='text-neutral-500 mt-12'>
                  { variant == 'login' ? '¿Primera vez en Flix Flix?' : '¿Ya tienes una cuenta?'}
                  <span onClick={toggleVariant} className='text-white ml-1 hover:underline cursor-pointer'>
                    {variant == 'login' ? 'Suscríbete ahora.' : 'Inicia sesión'}
                  </span>
                </p>
               
              </div>
            </div>
            </form>
          </div>
        </div>
      );
      
}

export default Login