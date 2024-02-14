import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';
import Multimedia from './Multimedia';

const Skills = () => {
  return (
    <section className='section'>
        <h2 className="section__title">
            My SKills
        </h2>
        <span className='section__subtitle'>
            My Techincal Level
        </span>

        <div className="skills__container container grid">
            <Frontend/>
            <Backend/>
            <Multimedia/>
        </div>
    </section>
  )
}

export default Skills