import React from 'react';

const Header = () => {
  return (
    <>
      <div className="container d-flex justify-content-between align-items-center mt-4 p-2">
        <div>
          <h4>Knowledge Cafe</h4>
        </div>
        <div>
          <img src="headerPerson.png" alt="" width={'45px'} />
        </div>
      </div>
      <hr className='container' />
    </>
  );
};

export default Header;