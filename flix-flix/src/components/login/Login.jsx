import Input from "../Input/Input"
import { useState, useCallback } from 'react'
import "./Login.css"
const Login = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [variant, setVariant] = useState('login');
    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant == 'login' ? 'registro' : 'login');
    }, [])

    const login = async () => {
      };
    
    const register = async () => {
      };

      return (
        <div className="relative h-full w-full fondo bg-no-repeat bg-center bg-fixed bg-cover">
          <div className="bg-black w-full h-full lg:bg-opacity-50">
            <nav className='px-12 py-5'>
              <img src="/images/logo.png" alt="logo" className='h-12'/>
            </nav>
            <div className="flex justify-center">
              <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                <h2 className='text-white text-4xl mb-8 font-semibold'>
                  {variant == 'login' ? 'Inicia sesión' : 'Crea una cuenta'}
                </h2>
                <div className="flex flex-col gap-4">
                  {variant == 'registro' && (
                    <Input 
                      label='Username'
                      onChange={(ev) => setName(ev.target.value)}
                      id='name'
                      type='text'
                      value={name}
                    />
                  )}
                  <Input 
                    label='Email o número de teléfono'
                    onChange={(ev) => setEmail(ev.target.value)}
                    id='email'
                    type='email'
                    value={email}
                  />
                  <Input 
                    label='Contraseña'
                    onChange={(ev) => setPassword(ev.target.value)}
                    id='password'
                    type='password'
                    value={password}
                  />
                </div>
                <button onClick={variant === 'login' ? login : register} className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
                  {variant == 'login' ? 'Iniciar sesión' : 'Crear cuenta'}
                </button>
                <div className="text-neutral-500 text-sm mt-2 flex justify-between">
                  <div className="">
                    <input type="checkbox" name="" id="recuerdame"/>
                    <label htmlFor='recuerdame' className='ms-1'>Recuérdame</label>
                  </div>
                  <span className='hover:underline hover:cursor-pointer'>¿Necesitas ayuda?</span>
                </div>
                <p className='text-neutral-500 mt-12'>
                  { variant == 'login' ? '¿Primera vez en Flix Flix?' : '¿Ya tienes una cuenta?'}
                  <span onClick={toggleVariant} className='text-white ml-1 hover:underline cursor-pointer'>
                    {variant == 'login' ? 'Suscríbete ahora.' : 'Inicia sesión'}
                  </span>
                </p>
                <p className='text-neutral-500 mt-2 text-sm'>
                  Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot.
                  <span className='text-blue-600 hover:cursor-pointer hover:underline ms-1'>
                    Más info.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
      
}

export default Login