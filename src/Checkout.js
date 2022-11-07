import React from 'react'
import './Checkout.css';
import { getBasketTotal } from './reducer';
import Subtotal from './Subtotal';
import { useStateValue} from './StateProvider'
import CheckoutProduct from './CheckoutProduct.js';
import Header from './Header';

function Checkout() {
  const [{basket}, dispatch] = useStateValue();
  console.log(basket)
  return (
    <div>
      <Header />
      <div className="checkout">
        <div className="checkout-container">
          <div className="checkout__left">
              <div>
                  <h2 className='checkout__title'>Your shopping basket</h2>
                  {basket.map(item => (
                    <CheckoutProduct
                      id={item.id}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      rating={item.rating}
                    />
                  ))}     
              </div>
          </div>
          <div className="checkout__right">
              <Subtotal />
          </div> 
        </div>
      </div> 
    </div>
  )
}

export default Checkout