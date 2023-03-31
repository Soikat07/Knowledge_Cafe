import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blogs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setData(data));
  },[])
  return (
    <>
      {
        data.map(blogData => <SingleBlog blogData={blogData} key={blogData.id}></SingleBlog>)
      }
    </>
  );
};

export default Blogs;