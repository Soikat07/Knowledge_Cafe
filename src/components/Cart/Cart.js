import React from 'react';

const Cart = ({ cart }) => {
  
  let titleArray = [];
  for (const singleCart of cart) {
    titleArray.push(singleCart.blog_title);
  }

  return (
    <div className="border p-3">
      <h6>Bookmarked Blogs : {cart.length}</h6>
      {titleArray.map(title => (
        <div className="card p-2 m-2 shadow">{title}</div>
      ))}
    </div>
  );
};

export default Cart;
