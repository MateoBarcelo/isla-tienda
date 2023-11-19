import { RegisterForm } from "../Login/RegisterForm";
import registerService from "../../services/register";
import { useState } from "react";
export function Register() {

    const [error, setError] = useState('')
    const [buttonDisabled, setButtonDisabled] = useState(false)

    const onRegister = async (formData) => {
        const { name, surname, email, phone, password } = formData

        try {
            setButtonDisabled(true);
            const registered = await registerService.register({ name, surname, email, phone, password });

            if (registered.error) {
                // Verificar el tipo de error
                if (registered.error.includes('email')) {
                    setError('Correo ya utilizado. Usa otro.');
                    setButtonDisabled(false);
                } else {
                    setError('Error en el servidor. Inténtalo de nuevo más tarde.');
                    setButtonDisabled(false);
                }

                return;
            }

            window.location.href = '/login';

        } catch (error) {
            setError('Error en el servidor. Inténtalo de nuevo más tarde.');
            setButtonDisabled(false);
        }
    }

    return (
        <div className="flex flex-col space-y-2 justify-center items-center">
            <RegisterForm onSubmit={onRegister} disabled={buttonDisabled}/>
            <div class={`bg-red-300 text-red-900 rounded-lg ${error ? 'enterUp' : 'hidden'}`} role="alert">
                <div class="flex p-4">
                {error}
                <div class="ms-auto">
                    <button type="button" onClick={() => setError(false)} class="inline-flex space-x-2 space-y-1 flex-shrink-0 justify-center items-center h-5 w-5 rounded-lg text-red-800 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100">
                    <span class="sr-only">Cerrar</span>
                    <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </button>
                </div>
                </div>
            </div>
        </div>
   
    )
}