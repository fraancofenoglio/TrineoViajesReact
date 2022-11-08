import CartButton from "./buttons/CartButton";
import CartTable from "./CartTable";
import {remove_all_from_cart} from "../actions/cartActions"

function Cart({click, setClick, setOpen}) {

  

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

            <CartButton click={click} setClick={setClick} setOpen={setOpen} action={remove_all_from_cart} id={"empty-cart"} text={"Vaciar Carrito"}></CartButton>
                            
            <CartButton click={click} setClick={setClick} setOpen={setOpen} id={"buy-cart"} action={remove_all_from_cart} text="Comprar"></CartButton>
        </div>


    </div>
  )
}

export default Cart