import { useState } from "react";
import {registerUser} from "../firebase/firebaseUtils";

function PruebaRegister() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault()

        try {
            await registerUser(email, password);

        } catch (error) {
            console.log(error)
        }
    }

  return (

    <div className="register-inputs">
        <section className="register-inputs">
            <h2>¿Sos nuev@?</h2>

            <form onSubmit={handleSubmit}>

                <div className="register-container">

                    <div className="row1">

                        <div>

                            <label htmlFor="email-input-login"> Email:</label>

                            <input required
                            type="email" id="email-input-register" placeholder="Ingrese su email" 
                            value={email} onChange={e => setEmail(e.target.value)}
                            />

                        </div>

                    </div>

                    <div className="row2">

                        <div>

                            <label htmlFor="email-input-login"> Cree una contraseña:</label>

                            <input required
                            type="password" id="password-input-register" placeholder="Contraseña" 
                            value={password} onChange={ e => setPassword(e.target.value)}
                            />

                        </div>
                    </div>

                </div>

                <button type="submit">Registrarse</button>

            </form>

        </section>
    </div>
  )
}

export default PruebaRegister