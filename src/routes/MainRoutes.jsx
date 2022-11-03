import {Routes, Route, Navigate} from 'react-router-dom';
import Account from '../pages/Account';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ProtectedRoute from "../components/ProtectedRoute"
import Register from '../pages/Register';
// import Prueba from '../pages/Prueba';
// import PruebaLogin from '../pages/PruebaLogin';

function MainRoutes() {
  return (
    <>
    <Routes>
        <Route path="/home" element={<Home/>}   />
        <Route path='/account' element={<Account/>}   />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />

        <Route path='/prueba' element={

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