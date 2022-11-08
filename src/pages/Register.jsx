import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FooterSection from "../components/FooterSection";
import {registerUser} from "../firebase/firebaseUtils";

function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()

        try {
            await registerUser(email, password);
            alert("Usuario Registrado");
            navigate("/login");

        } catch (error) {
            console.log(error)
        }
    }

  return (
    <>
        <div className="main-account">
            <section className="register-inputs">
                <h2>¿Sos nuev@?</h2>

                <form onSubmit={handleSubmit}>

                    <div className="register-container">

                        <div className="row1">

                            <div>

                                <label htmlFor="email-input-register"> Email:</label>

                                <input required
                                type="email" id="email-input-register" placeholder="Ingrese su email" 
                                value={email} onChange={e => setEmail(e.target.value)}
                                />

                            </div>

                        </div>

                        <div className="row2">

                            <div>

                                <label htmlFor="password-input-register"> Cree una contraseña:</label>

                                <input required
                                type="password" id="password-input-register" placeholder="Contraseña" 
                                value={password} onChange={ e => setPassword(e.target.value)}
                                />

                            </div>
                        </div>

                    </div>

                    <button type="submit">Registrarse</button>

                </form>

                <div>
                    <p>O inicia sesión en tu cuenta:</p>
                    <button onClick={() => navigate("/login")}>Iniciar Sesión</button>
                </div>

            </section>
        </div>
        <FooterSection></FooterSection>
    </>
  )
}

export default Register