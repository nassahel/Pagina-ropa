import React from 'react'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './main.css';
import banner from '../assets/banner.png'

function Main() {
  return (
    <div className='Main'>
<section className='banner'>
    <img src={banner} alt="" />
</section>

    </div>
  )
}

export default Main