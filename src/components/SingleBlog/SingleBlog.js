import React from 'react';

const SingleBlog = props => {
  const {
    blog_image,
    blog_title,
    author_image,
    author_name,
    published_date,
    read_time,
  } = props.blogData;

  return (
    <>
      <div className="card">
        <img src={blog_image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
