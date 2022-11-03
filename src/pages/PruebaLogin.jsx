import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../actions/user-actions";
import { auth } from "../firebase/firebaseConfig";
import { loginUser, signInWithGoogle, signOutUser } from "../firebase/firebaseUtils";

function PruebaLogin() {

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser);
    const navigate = useNavigate()
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [img, setimg] = useState();

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


    const handleLogout = async () => {
        try {
            await signOutUser();
            dispatch(setUser(null))
            console.log("usuario deslogueado");

        } catch (error) {
            console.log(error.code)
        }
    }


    useEffect(() =>{
        const unsuscribe = onAuthStateChanged(auth, user => {
            
            dispatch(setUser(user))

        })
        
        // setimg(currentUser && currentUser.photoURL)
        return unsuscribe();
    }, [dispatch])

    // console.log(currentUser)
  return (

        <section className="login-inputs">

                <h2>¿Tenés cuenta?</h2>

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

                <div>
                    <button onClick={handleLogout}>Cerrar sesión</button>
                </div>

                <div>
                    <p>O inicia sesión con google:</p>
                    <button onClick={async () => {
                        const result = await signInWithGoogle();
                        dispatch(setUser(result.user))
                        // console.log(signInWithGoogle().user)
                        //  signInWithGoogle();
                        // dispatch(setUser(currentUser))
                        // setimg(true)
                        
                    }}>Google</button>
                </div>

        </section>
  )
}

export default PruebaLogin