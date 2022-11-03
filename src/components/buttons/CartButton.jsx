import { useDispatch } from "react-redux";

function CartButton({text, id, action}) {

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(action())
  }
  
  return (
    <a onClick={handleClick} href="#cart" id={id}>
        {text}
    </a>
  )
}

export default CartButton