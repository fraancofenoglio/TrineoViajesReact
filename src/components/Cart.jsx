import CartButton from "./buttons/CartButton";
import CartTable from "./CartTable";
import {remove_all_from_cart} from "../actions/cartActions"


function Cart({click, setClick}) {

  function fn () {
    alert("Compra realizada")
  }
  

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

            <CartButton click={click} setClick={setClick} action={remove_all_from_cart} id={"empty-cart"} text={"Vaciar Carrito"}></CartButton>
                            
            <CartButton click={click} setClick={setClick} id={"buy-cart"} fn={fn} action={remove_all_from_cart} text="Comprar"></CartButton>
        </div>

    </div>
  )
}

export default Cart