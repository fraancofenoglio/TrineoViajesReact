import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CartButton({text, id, action, fn, click, setClick}) {

  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser);
  const state = useSelector(state => state.cart.cartItems);
  const navigate = useNavigate();

  console.log(click)

  const handleClick = (e) => {

    setClick(!click);
    e.preventDefault();


    if (id === "empty-cart" && state.length) {
      
      action && dispatch(action());
      // setClick(!click);
    }


    if (currentUser !== null && state.length) {
      // dispatch(action());
      navigate("/checkout");
      console.log("comprado");
      setClick(!click);
      // fn();

    } else if(!state.length) {

      alert("no hay articulos en el carrito");

    } else {

      navigate("/login");
      setClick(!click);
    }

  }
  
  return (
    <a onClick={handleClick} href="#cart" id={id}>
        {text}
    </a>
  )
}

export default CartButton