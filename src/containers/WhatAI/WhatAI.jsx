
import React from 'react'
import './whatAi.css'
import {Feature} from '../../components/index'

function WhatAI() {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">

      <div className="gpt3__whatgpt3-feature">
        <Feature title="Embrace the Machine?" text =" But what is the AI, and how can you get money with it" />
      </div>

      <div className="gpt3__whatgpt3-heading">
         <h1 className='gradient__text'>
          Go Beyond the limitations of your Average intellect
         </h1>
         <p>
          You don't need limits
         </p>
      </div>
      <div className="gpt3__features-container">
          <Feature title='Chatbot' text="Just a phase or here to stay"/>
          <Feature title="Knowledgebase" text="Is it truely meaningful or just a causal dinner conversaitions"/>
          <Feature title="Education" text="you figure it out on your own"/>
      </div>
    </div>
  )
}

export default WhatAI