import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i className='bx bx-award about__icon'></i>

            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">4 Years ++</span>
        </div>
        <div className="about__box">
        <i className='bx bx-briefcase about__icon'></i>

            <h3 className="about__title">Multitalent</h3>
            <span className="about__subtitle">More than 1 skill</span>
        </div>
        <div className="about__box">
        <i className='bx bx-support about__icon'></i>

            <h3 className="about__title">Always Here</h3>
            <span className="about__subtitle">27/7 Online</span>
        </div>
    </div>
  )
}

export default Info