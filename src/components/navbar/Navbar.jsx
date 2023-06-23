
import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import logo from '../../assets/GPT-3.svg'


function Navbar
() {
  return (
    <div className='gpt3__navbar '>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo '>
          <img src={logo} alt='logo'/>
        </div>
        <div className='gpt3__navbar-links_container'>
          <p><a href='#home'>HOME</a></p>
          <p><a href='#info'>INFO</a></p>
          <p><a href='#ai'>AI</a></p>
          <p><a href='#features'>Case Study</a></p>
          <p><a href='#lib'>Library</a></p>
        </div>
      </div> 
      Navbar
    </div>
  )
}

export default Navbar
