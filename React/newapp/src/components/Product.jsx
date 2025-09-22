import React from 'react'

function Product(props) {
  return (
    <div>
        <h5>ProductName:{props.product.pname}</h5>
        <h4>Price: {props.product.price}</h4>
    </div>
  )
}

export default Product