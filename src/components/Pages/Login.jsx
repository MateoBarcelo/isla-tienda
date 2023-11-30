import React from 'react';
import {LoginForm} from '../Login/LoginForm.jsx';
import loginService from '../../services/login.js'
import { useAuth } from '../../context/auth.jsx';
const Login = () => {

  if(localStorage.getItem('accessToken')) window.location.href = '/'

  const [error, setError] = React.useState(false)
  const [noAuth, setNoAuth] = React.useState(false)
  const [buttonDisabled, setButtonDisabled] = React.useState(false)
  const { signin } = useAuth()

  const params = new URLSearchParams(window.location.search)

  const handleLoginSubmit = async (formData) => {
    const { email, password, remember } = formData
    
    try {
        setButtonDisabled(true)
        const user = await loginService.login({email, password, remember})
        //we pass the token to the context and the remember for save it on localstorage
        if(user.authToken) {
          signin(user, remember)
          window.location.href = params.get("ref") ? `/${params.get("ref")}` : '/'
        } else {
          setNoAuth(true)
          setButtonDisabled(false)
        }
    } catch (error) {
        setError(true)
        setButtonDisabled(false)
    }
  };

  return (
    <div className='flex flex-col space-y-4 justify-center items-center'>
      <LoginForm onSubmit={handleLoginSubmit} noAuth={noAuth} disabled={buttonDisabled} />
      <div class={`bg-red-300 text-red-900 rounded-lg ${error ? 'enterUp' : 'hidden'}`} role="alert">
        <div class="flex p-4">
          Error al iniciar sesión. Intenta de nuevo!
          <div class="ms-auto">
            <button type="button" onClick={() => setError(false)} class="inline-flex space-x-2 space-y-1 flex-shrink-0 justify-center items-center h-5 w-5 rounded-lg text-red-800 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100">
              <span class="sr-only">Cerrar</span>
              <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Login;