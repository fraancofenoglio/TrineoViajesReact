import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {remove_all_from_cart} from "../actions/cartActions";
import FooterSection from "../components/FooterSection";
import Modal from "../components/Modal";

function Checkout() {

    const [open, setOpen] = useState(false);

    const state = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();

    const quant = state.reduce((acc, cart) => {
        return acc + (cart.price * cart.quantity)
    }, 0);

    const handleClick = () => {

        setOpen(true);
        dispatch(remove_all_from_cart())

    }

  return (
    <>
        <div className="checkout">
            <div className="checkout-container">
                <h1>Checkout</h1>
                {state.length ? state.map((trip, i) => (
                    <div className="checkout-card" key={i}>
                        <img style={{width: "50px", height: "50px"}} src={trip.img} alt={trip.city} />
                        <h3>{trip.city}</h3>
                        <h3>${trip.price * trip.quantity}</h3>
                        <h3>Cantidad: {trip.quantity}</h3>
                    </div>
                )) : <h2>No hay articulos</h2>}

                <h2>Total: ${quant}</h2>
                <button className="generic-button" onClick={handleClick}>Comprar</button>
            </div>
        </div>

        <Modal open={open} setOpen={setOpen}>
            <h3>¡Felicitaciones!</h3>
            <p>Compra realizada con éxito. Recibirás los detalles por mail.</p>
        </Modal>

        <FooterSection></FooterSection>
    </>
  )
}

export default Checkout