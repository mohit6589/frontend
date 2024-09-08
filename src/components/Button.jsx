import React from 'react'

const Button = ( { children } ) => {
  return (
<button className='py-2 px-4 ml-5 bg-blue-500 text-white rounded hover:bg-blue-300'>
    {children}</button>  
    )
}

export default Button