import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        MyStream
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
      </div>
    </div>
  );
};

export default NavBar;