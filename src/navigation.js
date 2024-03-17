// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <header role={"banner"} className='container mx-auto px-8rem text-lg mt-4'>
    
      <div className='grid grid-cols-3 rounded-full border-[#DC143C] overflow-hidden border leading-10  header-inner justify-between'>

      
      <ul className='flex gap-x-8 font-thin justify-center items-center'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li >
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>  
      </ul>
<div className='my_name flex font-black justify-center items-center'>
  <h4>Talha Ahmed</h4>
</div>
<div className='flex font-black justify-center items-center relative isolate'>
  <button>Hit me up</button>
  </div>
    </div>
    </header>
  );
};

export default Navigation;
