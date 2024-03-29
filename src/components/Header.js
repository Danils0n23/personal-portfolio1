/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#'>
            <img src={Logo} alt='' style={{ maxWidth: '200px', maxHeight: '100px' }} />
          </a>
          <button className='btn btn-sm'>Work with me</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
