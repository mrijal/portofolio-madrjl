import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://instagram.com/madrjl" className="home__social-icon" target='_blank'>
            <i className='uil uil-instagram'></i>
            <span className='home__social-link'>instagram.com/madrjl</span>
        </a>
        
        <a href="https://github.com/mrijal" className="home__social-icon" target='_blank'>
            <i className='uil uil-github-alt'></i>
            <span className='home__social-link'>github.com/mrijal</span>
        </a>
        
        <a href="https://www.linkedin.com/in/mdrjl07/" className="home__social-icon" target='_blank'>
            <i className='uil uil-linkedin'></i>
            <span className='home__social-link'>linkedin.com/in/mdrjl07</span>
        </a>
        <div className="animation"></div>
    </div>
  )
}

export default Social