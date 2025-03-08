import React from 'react'

type Text = {
    text: string;
    className?: string;
}

const Button = ({text, className}: Text) => {
  return (
    <div className={`bg-gradient-to-r from-purple-500 to-indigo-600 px-3 py-2 rounded-md text-white cursor-pointer ${className}`}>
        {text}
    </div>
  )
}

export default Button