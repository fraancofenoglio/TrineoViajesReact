import { useState } from "react"
import Button from "../components/buttons/Button";
import { resetPassword } from "../firebase/firebaseUtils";

function ForgotPassword() {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await resetPassword(email);
            alert("mail de recupero de contraseña enviado")
            
        } catch (error) {
            console.log(error.code)
        }
    }

  return (
    <>
        <div className="main-account">
            <form className="login-inputs" onSubmit={handleSubmit}>
                <label htmlFor="email">Ingrese Email:</label>
                <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Button text={"Cambiar Contraseña"} action={handleSubmit}></Button>
            </form>

        </div>
    </>
  )
}

export default ForgotPassword