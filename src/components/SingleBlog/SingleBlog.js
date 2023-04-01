import React from 'react';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const SingleBlog = (props) => {
  const handleTimeToCart = props.handleTimeToCart;
  const handleBlogToCart = props.handleBlogToCart;

  const {
    blog_image,
    blog_title,
    author_image,
    author_name,
    published_date,
    read_time,
  } = props.blogData;

  return (
    <div className="mt-3">
      <div className="card">
        <img src={blog_image} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-2">
              <div>
                <img
                  src={author_image}
                  className="rounded-5"
                  alt=""
                  width={'40px'}
                />
              </div>
              <div>
                <h5>{author_name}</h5>
                <p>{published_date}</p>
              </div>
            </div>
            <p>
              {read_time} min read{' '}
              <span className='text-primary'>
                <FontAwesomeIcon
                  onClick={() => handleBlogToCart(props.blogData)}
                  icon={faBookmark}
                />
              </span>
            </p>
          </div>
          <h4 className="card-title">{blog_title}</h4>
          <p>#beginners #programming</p>
          <p
            className="text-primary text-decoration-underline"
            onClick={() => handleTimeToCart(props.blogData)}
          >
            Mark as read
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
