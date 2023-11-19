import { useState } from "react";
import Button from '../Button.jsx'
import { Link } from "react-router-dom";
export function LoginForm({onSubmit, noAuth, disabled}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault()

    onSubmit({
      email: email,
      password: password,
      remember: remember
    })
  }

  return (
    <div className="flex items-center justify-center text-mint-900">
    <form onSubmit={handleLogin} className="mt-14 w-80 max-w-screen-lg sm:w-96 h-2/3">
      <h4 className="text-2xl font-bold mb-2">Acceder</h4>
      <p className="text-gray-500 mb-8">Bienvenido! Introduce tus datos a continuación.</p>
      <div className="mb-1 flex flex-col gap-4 font-semibold">
        <label htmlFor="email" className="text-blue-gray-500">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="nombre@mail.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="p-2 -mt-2 rounded-lg bg-mint-100 border-mint-700 border-opacity-70 font-normal text-sm border focus:ring-0 focus:outline focus:outline-2 focus:outline-mint-500 outline-mint-500 outline-0 transition-all [transition-duration:100ms]"
        />
        <label htmlFor="password" className="text-blue-gray-500">
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          placeholder="*************"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="p-2 -mt-2 rounded-lg bg-mint-100 border-mint-700 border-opacity-70 font-normal text-sm border focus:ring-0 focus:outline focus:outline-2 focus:outline-mint-500 outline-mint-500 outline-0 transition-all [transition-duration:100ms]"
        />
      </div>

      {noAuth && <p className="text-red-500 mt-6 text-center font-normal flex justify-center"> Usuario o contraseña incorrectos </p>}
      
      <div className="flex items-center gap-2 mb-4 mt-4">
        <input
          type="checkbox"
          id="remember"
          checked={remember}
          onChange={(event) => setRemember(event.target.checked)}
          className="p-2 rounded-lg bg-white opacity-70 focus:ring-0 focus:outline focus:outline-mint-500 outline-mint-500 outline-0 transition-all [transition-duration:100ms]"
        />
        <label htmlFor="remember" className="text-blue-gray-500 font-medium">
          Recuerdame
        </label>
      </div>
      <div className="text-center">
        <Button type={"submit"} title="Ingresar" disabled={disabled} />
      </div>
      <p className="text-gray-500 mt-6 text-center font-normal flex justify-center">
        No tienes una cuenta?{" "}
        <Link to="/register">
            <h1 className="text-mint-900 px-2 font-semibold underline">Registrarse</h1>
        </Link>
      </p>
    </form>
    </div>
  );
}