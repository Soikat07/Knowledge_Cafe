import React from 'react';
const CartTop = ({ cart }) => {
  let totalMin = 0;
  for (const min of cart) {
    totalMin = totalMin + parseInt(min.read_time);
  }
  return (
    <div className="text-center border border-info text-info 
    py-2 rounded-2 my-3">
      <h6>
        Spent time on read: {totalMin} min
      </h6>
    </div>
  );
};

export default CartTop;