import { useState } from 'react';
import { NavLink} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Cart from './Cart';
import Modal from './Modal';

function NavBar({hamb, setHamb}) {

    const [click, setClick] = useState(false);
    const [open, setOpen] = useState(false);

  return (
    <nav className="nav-desktop">

        <div className="logo">
            <NavLink to="/home">

                <h1>TRINEO</h1>

            </NavLink>

        </div>

        <div className="navigation-desktop-container">

            <div className="navigation-desktop">
                <div className="trip">
                    <HashLink smooth to="/home#show-trip" >
                        VIAJES
                    </HashLink>
                </div>
                
                <div className="login">
                    <NavLink to="/account">
                        MI CUENTA
                    </NavLink>
                </div>
            </div>
            
            <div className="cart-container">
                <button className="showCart" href='.'>

                    <img 
                    onClick={(e) => {
                        e.preventDefault()
                        setClick(!click)
                        setHamb(!hamb)
                    }}
                    onMouseOver={(e) => {
                        e.preventDefault()
                        setClick(!click)
                        setHamb(!hamb)
                    }
                    }
                    style={{width: "25px", height: "25px"}}
                    src="../assets/cart.png" alt=""
                    />

                    <Cart setOpen={setOpen} click={click} setClick={setClick}></Cart>
 
                </button>

                <Modal open={open} setOpen={setOpen}>
                    <h3>No hay artículos en el carrito.</h3>
                </Modal>

            </div>
        </div>
    </nav>
  )
}

export default NavBar