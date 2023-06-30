
import React from 'react'
import './features.css'

function Features({title, text}) {
  return (
    <div className='gpt3__features-container__feature'>
      <div className='gpt3__features-container_feature'>

      </div>
      <h1>
        {title}
      </h1>
      <div className='gpt3__features-container_feature-text'>
        {text}
      </div>
    </div>
  )
}

export default Features