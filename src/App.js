import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/NavBar';
import MainRoutes from './routes/MainRoutes';
import { useState, useEffect } from 'react';
import HamburguerMenu from './components/HamburguerMenu';

import {setUser} from "./actions/user-actions";

import {auth} from "./firebase/firebaseConfig";
import { onAuthStateChanged } from 'firebase/auth';
// import { onSnapshot } from 'firebase/firestore';
import { useDispatch } from 'react-redux';

// function onAuthStateChange(cb, action) {

//   onAuthStateChanged(auth, async userAuth => {

//     if (userAuth) {

//       const userRef = await createUserProfileDocument(userAuth);

//       onSnapshot(userRef, snapShot =>
        
//         cb(action({ id: snapShot.id, ...snapShot.data() }))
//       );
//     } else {
//       cb(action(null));
//     }
//   });
// }


 
function App() {

  const [hamb, setHamb] = useState(false);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   const unsuscribe = onAuthStateChange(dispatch, setUser);
  //   return () => unsuscribe();
  // }, [dispatch]);

  
  useEffect(() =>{
    const unsuscribe = onAuthStateChanged(auth, user => {
        
        dispatch(setUser(user))

    })
    return unsuscribe();
  }, [dispatch]);

  return (

    <>
      <BrowserRouter>

        <Navbar hamb={hamb} setHamb={setHamb}></Navbar>
        <HamburguerMenu hamb={hamb}></HamburguerMenu>
        <MainRoutes></MainRoutes>

      </BrowserRouter>

    </>

  );
}

export default App;
