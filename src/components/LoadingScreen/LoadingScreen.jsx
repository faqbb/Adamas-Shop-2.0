import React from 'react'
import ReactLoading from 'react-loading'
function LoadingScreen() {
  return (
    <div className='container p-5 m-5 d-flex justify-content-center'>
      <ReactLoading type="spin" color="#dc3545"
        height={300} width={150} />
    </div>
  )
}

export default LoadingScreen