import React from 'react';
import navImg from '../../assets/logo.png';
import dollarImg from '../../assets/dollar.png';


const NavBar = ({availAbleBalance}) => {
    return (

<div className="navbar max-w-[1200px] mx-auto">
  <div className="flex-1">
    <a className="text-xl"><img className='w-[60px] h-[60px]' src={navImg} alt="" /></a>
  </div>
  <div className="flex items-center">
    <span className='mr-2'>{availAbleBalance} Coin</span>
    <img src={dollarImg} alt="" />

  </div>
</div>
            
       
    );
};

export default NavBar;