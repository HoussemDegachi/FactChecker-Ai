import React from 'react'

function ErrorComp({ errorData }) {
  return (
    <div>
      An error occured
      <p>{errorData.message}</p>
    </div>
  )
}

export default ErrorComp