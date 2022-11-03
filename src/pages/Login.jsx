// import { onAuthStateChanged } from "firebase/auth";
// import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../actions/user-actions";
import FooterSection from "../components/FooterSection";
// import { auth } from "../firebase/firebaseConfig";
import { loginUser, signInWithGoogle } from "../firebase/firebaseUtils";

function Login() {

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser);
    const navigate = useNavigate()
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [img, setimg] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();

        
        try {
            await loginUser(email, password);
            navigate("/home")
            console.log("usuario logueado", currentUser);

        } catch (error) {
            console.log(error.code)
        }
    }


    // const handleLogout = async () => {
    //     try {
    //         await signOutUser();
    //         dispatch(setUser(null))
    //         console.log("usuario deslogueado");

    //     } catch (error) {
    //         console.log(error.code)
    //     }
    // }


    // useEffect(() =>{
    //     const unsuscribe = onAuthStateChanged(auth, user => {
            
    //         dispatch(setUser(user))

    //     })
    //     return unsuscribe();
    // }, [dispatch]);

    // console.log(currentUser)
  return (
    <>
        <div className="main-account">

            <section className="login-inputs">

                    <h2>Iniciar sesión</h2>

                    <form onSubmit={handleSubmit}>
                        <div>

                            <label htmlFor="email-input-login"> Email:</label>

                            <input required
                            type="email" id="email-input-login" placeholder="Ingrese su email" 
                            value={email} onChange={e => setEmail(e.target.value)}
                            />

                        </div>
                        <div>

                            <label htmlFor="email-input-login"> Contraseña:</label>

                            <input required
                            type="password" id="password-input-login" placeholder="Contraseña" 
                            value={password} onChange={e => setPassword(e.target.value)}
                            />

                        </div>

                        <button type="submit">Ingresar</button>
                        
                    </form>

                    <div className="login-google-button">
                        <p>O inicia sesión con google:</p>
                        <button
                        style={{display: "flex", flexDirection: "row", justifyContent: "center"}}
                        onClick={async () => {
                            const result = await signInWithGoogle();
                            dispatch(setUser(result.user))
                            navigate("/home")
                            
                        }}
                        onMouseEnter={() => setimg(!img)}
                        onMouseLeave={() => setimg(!img)}
                        >
                            <img  src={img ? "../assets/google-logo-24-black.png" : "../assets/google-logo-24.png"} alt="google-logo"/>
                        </button>
                    </div>

                    <div className="register-div-button">
                        <label htmlFor="register">¿No tenés cuenta?</label>
                        <button onClick={() => navigate("/register")}>Registrarse</button>
                    </div>

            </section>
        </div>
        <FooterSection></FooterSection>
    </>
  )
}

export default Login