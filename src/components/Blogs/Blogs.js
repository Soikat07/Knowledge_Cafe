import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';
import CartTop from '../CartTop/CartTop';
import Cart from '../Cart/Cart';

const Blogs = () => {
  const [data, setData] = useState([]);
  const [time, setTime] = useState([]);
  const [cart, setCart] = useState([]);
 
  const handleTimeToCart = blog => {
    const newTimeCart = [...time, blog];
    setTime(newTimeCart);
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
    <div className="row row-cols-1 row-cols-lg-2 position-relative">
      <div className="col col-lg-8">
        {data.map(blogData => (
          <SingleBlog
            blogData={blogData}
            key={blogData.id}
            handleTimeToCart={handleTimeToCart}
            handleBlogToCart={handleBlogToCart}
          ></SingleBlog>
        ))}
      </div>
      <div className="col col-lg-4">
        <div className="position-sticky top-0">
        <CartTop time={time}></CartTop>
        <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Blogs;