import React from 'react';

import Image from '../assets/avatar1.png'

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

import { TypeAnimation } from 'react-type-animation';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants'

const Banner = () => {
  return <section className='section' id='home'>
    <div>
      <div>
        <div>
          <h1>
            DANILSON <spa>BENGUI Jr 23</spa>
          </h1>
          <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>I am a </span>
            <TypeAnimation
              sequence={[
                'Software Developer',
                2000,
                'Baskettball Player',
                2000,
                'Photographer',
                2000,
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
            />
          </div>
          <p> Hello! I'm passionate about basketball, software development, and photography. <br /> Basketball taught me competitiveness and teamwork, skills I apply in software development.</p>
        </div>
      </div>
      <div>
        <img src={Image} alt="" />
      </div>
    </div>
  </section>;
};

export default Banner;
