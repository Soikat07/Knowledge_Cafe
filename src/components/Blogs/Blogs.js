import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';
import CartTop from '../CartTop/CartTop';
import Cart from '../Cart/Cart';

const Blogs = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  // console.log(cart);
  const handleTimeToCart = blog => {
    
  }
  const handleBlogToCart = blogCart => {
    const newCart = [...cart, blogCart];
    setCart(newCart);
  };
  
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="row position-relative">
      <div className="col-8">
        {data.map(blogData => (
          <SingleBlog
            blogData={blogData}
            key={blogData.id}
            handleBlogToCart={handleBlogToCart}
          ></SingleBlog>
        ))}
      </div>
      <div className="col-4">
        <div className="position-sticky top-0">
        <CartTop cart={cart}></CartTop>
        <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Blogs;