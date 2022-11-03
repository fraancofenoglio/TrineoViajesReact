import React from 'react'

function Button({text, action}) {

  return (
    <button onClick={ () => action()} className='generic-button'>
        {text}
    </button>
  )
}

export default Button