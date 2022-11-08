
const Modal = ({children, open, setOpen, fn}) => {

  return (
    <div className={`modal-container ${open && "modal-open"}`} onClick={() => setOpen(false)}>
        
        <div className="modal-message" onClick={(e) => e.stopPropagation()}>

            {children}
            <button onClick={ () => {
                fn && fn()
                setOpen(false);
            }} id="close">Aceptar</button>

        </div>
    </div>
  )
}

export default Modal