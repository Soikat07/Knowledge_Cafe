import React from 'react';

const Cart = ({cart}) => {
  
  return (
    <div className='border border-info p-3'>
      <h5>Bookmarked Blogs : {cart.length}</h5>
    </div>
  );
};

export default Cart;