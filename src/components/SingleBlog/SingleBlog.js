import React from 'react';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faBookmark } from '@fortawesome/free-solid-svg-icons';

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
    <div className="mt-3">
      <div className="card w-50">
        <img
          src={blog_image}
          className="card-img-top w-full img-fluid"
          alt="..."
        />
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
              {read_time} min read{" "}
              <a href='./marked'>
                <FontAwesomeIcon icon={faBookmark} />
              </a>
            </p>
          </div>
          <h4 className="card-title">{blog_title}</h4>
          <p>#beginners #programming</p>
          <a href="/mark">Mark as read</a>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
