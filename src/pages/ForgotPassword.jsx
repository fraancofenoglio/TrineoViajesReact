import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Button from "../components/buttons/Button";
import Modal from "../components/Modal";
import { resetPassword } from "../firebase/firebaseUtils";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [title, setTitle] = useState("");

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await resetPassword(email);
            setTitle("¡Listo!");
            setMessage("Te enviamos un mail al correo indicado para recuperar tu contraseña.")
            setOpen(true)
            
        } catch (error) {
            if (error.code === "auth/user-not-found") {
                setTitle("¡Ups!");
                setMessage("Usuario no encontrado, revise el correo ingresado.");
                setOpen(true);
            }
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
        <Modal open={open} setOpen={setOpen} fn={ () => {
            if (title === "¡Listo!") {
                navigate("/login")
            }
        }}>
            <h3>{title}</h3>
            <p>{message}</p>
        </Modal>
    </>
  )
}

export default ForgotPassword