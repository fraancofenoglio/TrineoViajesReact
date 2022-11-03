import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "./firebaseConfig";

const registerUser = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
}

const loginUser = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
}

const signOutUser = () => auth.signOut();

const provider = new GoogleAuthProvider();

const signInWithGoogle = () => signInWithPopup(auth, provider);

export {registerUser, loginUser, signOutUser, signInWithGoogle};