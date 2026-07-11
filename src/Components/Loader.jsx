import React from 'react'


const Loader = ({size = 18}) => {
  return (
     <span
    className="spinner"
    style={{ width: size, height: size }}
  />
  )
}

export default Loader