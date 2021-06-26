import React from 'react'
import Form from './Form'

import './styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='home__text'>
        {/* home__title */}
        <h1 className='home__title'>Online Crypto Investment</h1>

        {/* home__info */}
        <p className='home__info'>
          Fast, anonymous and secure way to save & earn guaranteed profits on
          your cryptocurrencies
        </p>

        {/* home__button */}
        <button className='home__button'>Get Started</button>
      </div>
      <div className='home__form'>
        <Form />
      </div>
    </div>
  )
}

export default Home
