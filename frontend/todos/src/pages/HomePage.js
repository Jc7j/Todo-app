import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h2>hi this is home page</h2>
      <Link to="/Login">Login</Link>
    </div>
  );
};

export default HomePage;
