import React, { useState, useEffect } from 'react'
import './styles/Header.css'
import Logo from './Logo.png'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

function Header() {
  const [show, setShow] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        setShow(true)
      } else setShow(false)
    })
    return () => {
      window.removeEventListener('scroll')
    }
  }, [])

  return (
    <div className={`header ${show && 'header__effect'}`}>
      <div className='header__left'>
        <img src={Logo} alt='logo' />

        <h2>Coinomac</h2>
      </div>
      <div className='header__nav'>
        <a href='#'>Home</a>

        <a href='#'>Benefit</a>

        <a href='#'>Portfolio</a>

        <a href='#'>Testimonial</a>

        <a href='#'>Contact</a>
      </div>
      <div className='header__buttons'>
        <button className='signin'>Sign In</button>

        <button className='signup'>Sign Up</button>
      </div>
      <MenuIcon className='menuicon' onClick={() => setShowMenu(true)} />

      <div
        className='header__dropdown'
        style={{
          transform: `${showMenu ? 'translateX(0%)' : 'translateX(100%)'}`,
        }}
      >
        <div className='closediv'>
          <a href='#'>Home</a>
          <CloseIcon className='closeIcon' onClick={() => setShowMenu(false)} />
        </div>

        <a href='#'>Benefit</a>
        <a href='#'>Portfolio</a>
        <a href='#'>Testimonial</a>
        <a href='#'>Contact</a>
      </div>
    </div>
  )
}

export default Header
