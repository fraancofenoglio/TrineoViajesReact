import CartButton from "./buttons/CartButton";
import CartTable from "./CartTable";
import {remove_all_from_cart} from "../actions/cartActions"

function Cart({click, setClick}) {

  return (
    <div
    onClick={(e) => e.preventDefault()}
    id="cart" 
    className={click ? "open-cart" : "cart"}
    onMouseLeave={(e) => {
      e.preventDefault()
      setClick(!click)}
    }
    >

        <CartTable/>

        <div className="cart-buttons">

            <CartButton action={remove_all_from_cart} id={"empty-cart"} text={"Vaciar Carrito"}></CartButton>
                            
            <CartButton id={"buy-cart"} text="Comprar"></CartButton>
        </div>

    </div>
  )
}

export default Cart