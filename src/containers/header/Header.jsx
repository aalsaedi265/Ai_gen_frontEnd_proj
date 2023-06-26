
import React from 'react'
import people from '../../assets/Group 81.png'
import './header.css'

function Header() {
  return (
    <div className='gpt3__header section__padding" id="home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
          Lets build an amazing robot
        </h1>
        <p>The boundaries of reality and morality blur in the ever-expanding universe of possibilities, challenging us to question the very fabric of existence and the moral compass that guides our choices</p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email'/>
          <button type="button"> Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='people'/>
          <p>The boundaries of reality and morality blur in the ever-expanding universe of possibilities, challenging us to question the very fabric of existence and the moral compass that guides our choices</p>
        </div>
        <div className='gpt3__header-image'>
          <img alt="ai"/>
        </div>
      </div>
    </div>
  )
}

export default Header