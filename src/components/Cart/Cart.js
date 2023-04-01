import React from 'react';

const Cart = ({ cart }) => {
  let titleArray = [];
  for (const singleCart of cart) {
    titleArray.push(singleCart.blog_title);
  }
  console.log(titleArray);
  return (
    <div className='border p-3'>
      <h5>Bookmarked Blogs : {cart.length}</h5>
        {
          titleArray.map(title => 
            <div className='card p-2 m-2 shadow'>{title}</div>
          )
        }
      </div>
  );
};

export default Cart;