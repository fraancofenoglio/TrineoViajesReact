import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
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

const resetPassword = async (email) => await sendPasswordResetEmail(auth, email)

export {registerUser, loginUser, signOutUser, signInWithGoogle, resetPassword};