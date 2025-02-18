import React from 'react'
import product from '../assets/product'

function Image() {
    const imageUrl = product.url
    return (
        <div style={{justifyContent:"center"}}>
            <img src={imageUrl} className="card-img-top" alt="..." style={{height:"200px", width:"200px"}}/>
        </div>
    )
}

export default Image