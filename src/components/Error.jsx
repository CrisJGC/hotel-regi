import React from 'react'

const Error = ({ msj }) => {
  return (
    <div className="text-red-700 font-semibold mb-3">
      <p>{msj}</p>
    </div>
  )
}

export default Error