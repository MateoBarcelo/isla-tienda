import { useState, useEffect, useMemo } from "react";
import Button from '../Button.jsx'
import { Link } from "react-router-dom";

const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validateName = name => /^[a-zA-Z ]{2,30}$/.test(name);
const validatePhone = phone => /^\d{9,}$/.test(phone);
const validateSurname = surname => /^[a-zA-Z ]{2,30}$/.test(surname);

export function RegisterForm({ onSubmit, disabled }) {
  const [buttonDisabled, setButtonDisabled] = useState(true); 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone,setPhone] = useState("");
  const [surname, setSurname] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const isEmailValid = useMemo(() => validateEmail(email), [email]);
  const isNameValid = useMemo(() => validateName(name), [name]);
  const isPhoneValid = useMemo(() => validatePhone(phone), [phone]);
  const isSurnameValid = useMemo(() => validateSurname(surname), [surname]);

  useEffect(() => {
    if (isEmailValid && isNameValid && isPhoneValid && isSurnameValid && termsAccepted) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [isEmailValid, isNameValid, isPhoneValid, isSurnameValid, termsAccepted]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      name: name,
      surname: surname,
      email: email,
      phone: phone,
      password: password,
      termsAccepted: termsAccepted,
    })
  };

  return (
    <div className="grid place-items-center text-mint-900">
    <form onSubmit={handleSubmit} className="mt-14 mb-2 w-80 max-w-screen-lg sm:w-96">
      <h4 className="text-2xl font-bold mb-2">Regístrate</h4>
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
        <div className="flex">
          <div className="space-y-2 pr-4">
            <label htmlFor="name" className="text-blue-gray-500">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              placeholder="Nombre"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="p-2 -mt-2 rounded-lg bg-mint-100 border-mint-700 font-normal border-opacity-70 text-sm border focus:ring-0 focus:outline focus:outline-2 focus:outline-mint-500 outline-mint-500 outline-0 transition-all [transition-duration:100ms]"
            />
        </div>
          <div className="space-y-2">
            <label htmlFor="surname" className="text-blue-gray-500">
              Apellido
            </label>
            <input
              type="text"
              id="surname"
              placeholder="Apellido"
              value={surname}
              onChange={(event) => setSurname(event.target.value)}
              className="p-2 w-full -mt-2 rounded-lg bg-mint-100 border-mint-700 font-normal border-opacity-70 text-sm border focus:ring-0 focus:outline focus:outline-2 focus:outline-mint-500 outline-mint-500 outline-0 transition-all [transition-duration:100ms]"
            />
          </div>
        </div>
        <label htmlFor="phone" className="text-blue-gray-500">
          Teléfono
        </label>
        <input
          type="text"
          id="phone"
          placeholder="Solo característica y número, Ejemplo: 342567890"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className="p-2 -mt-2 rounded-lg bg-mint-100 border-mint-700 font-normal border-opacity-70 text-sm border focus:ring-0 focus:outline focus:outline-2 focus:outline-mint-500 outline-mint-500 outline-0 transition-all [transition-duration:100ms]"
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
      <div className="flex items-center gap-2 mb-4 mt-4">
        <input
          type="checkbox"
          id="terms"
          checked={termsAccepted}
          onChange={(event) => setTermsAccepted(event.target.checked)}
          className="p-2 rounded-lg bg-white opacity-70 focus:ring-0 focus:outline focus:outline-mint-500 outline-mint-500 outline-0 transition-all [transition-duration:100ms]"
        />
        <label htmlFor="terms" className="text-blue-gray-500 font-medium">
          Acepto los términos y condiciones
        </label>
      </div>
      <div className="text-center">
        <Button type={"submit"} title="Registrarse" disabled={buttonDisabled || disabled} />
      </div>
      <p className="text-gray-500 mt-6 text-center font-normal flex justify-center">
        Ya tienes una cuenta?{" "}
        <Link to="/login">
            <h1 className="text-mint-900 px-2 font-semibold underline">Ingresar</h1>
        </Link>
      </p>
    </form>
    </div>
  );
}
