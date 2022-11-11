import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CartButton({text, id, action, click, setClick, setOpen}) {

  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser);
  const state = useSelector(state => state.cart.cartItems);
  const navigate = useNavigate();

  const handleClick = (e) => {

    setClick(!click);
    e.preventDefault();

    if (id === "empty-cart" && state.length) {
      
      action && dispatch(action());
    }

    if (currentUser !== null && state.length && id === "buy-cart") {
      navigate("/checkout");
      setClick(!click);

    } else if(!state.length) {

      setOpen(true)

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