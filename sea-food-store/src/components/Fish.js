import React from 'react'
import {formatPrice} from '../helpers'

class fish extends React.Component{


    render(){
        const {image, name, price, desc, status} = this.props.detail;
        const isAvailable = status ==='available';

        return(
            <li className="menu-fish">
                <img src= {image} alt={name}/>
                <h3 className='fish-name'>
                {name}
        <span className = "price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button disabled={!isAvailable } 
                onClick={()=> this.props.addToOrder(this.props.index)}>
                    {isAvailable? 'ADD TO CART':'SOLD OUT!!!'}
                </button>
            </li>
        )
    }

}

export default fish;