import {Routes, Route, Navigate} from 'react-router-dom';
import Account from '../pages/Account';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ProtectedRoute from "../components/ProtectedRoute"
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';
import Checkout from '../pages/Checkout';
import { useSelector } from 'react-redux';
// import Prueba from '../pages/Prueba';
// import PruebaLogin from '../pages/PruebaLogin';

function MainRoutes() {

  const currentUser = useSelector(state => state.user.currentUser);
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home/>}   />
        {/* <Route path='/account' element={<Account/>}   /> */}
        <Route path='/register' element={ currentUser === null ? <Register/> : <Navigate to="/account"/>} />
        <Route path='/login' element={ currentUser === null ? <Login/> : <Navigate to="/account"/>} />
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path='/checkout' element={ currentUser !== null ? <Checkout/> : <Navigate to="/login"/>}/>

        <Route path='/account' element={

          <ProtectedRoute redirectTo={"/login"}>
            <Account/>
          </ProtectedRoute>

        }></Route> 

        <Route path='/' element={<Navigate to="/home"/>}></Route>


      </Routes>
    
    </>
  )
}

export default MainRoutes