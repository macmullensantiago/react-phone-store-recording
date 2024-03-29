import React from 'react';
import { Link } from 'react-router-dom';
import PayPalButton from './PayPalButtons';
export default function CartTotals ({value}) {
    const {carttSubtotal, carTax, cartTotal, clearCart} = va;ue;
    return (
    <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8
            text-capitalize text-right">
             <Link to="/">
               <button
                 className="btn btn-outline-danger text-uppercase
                 mb-3 px-5"
                  type="button"
                  onClick={() => clearCart()}
                   >
                clear cart
            </button>
          </Link>
          <h5>
              <span className="text-little">subtotal :</span>
              <strong>$ {cartSubtotal}</strong>
            <h5>
              <span className="text-little">tax :</span>
              <strong>$ {cartTax}</strong>
            <h5>
              <span className="text-little">total :</span>
              <strong>$ {cartSubtotal}</strong>
          </h5>
          <PayPalButton total={cartTotal} clearCart={clearCart} />
        </div>
     </div>
  </div>
</React.Fragment>
 );
}
