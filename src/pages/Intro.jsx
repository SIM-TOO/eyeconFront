import React from 'react'
import Header from '../components/Header'
import Intro01 from '../components/introPage/Intro01'
import Intro02 from '../components/introPage/Intro02'
import Intro03 from '../components/introPage/Intro03'
import Intro04 from '../components/introPage/Intro04'
import Intro05 from '../components/introPage/Intro05'
import Slider from '../components/introPage/Slider'


function IntroPage() {
  localStorage.clear('dong');
  localStorage.clear('address');

  return (
    <div>
      <Header />
      <div className='md:block hidden'>
        <Slider />
      </div>



      <Intro01 />
      <Intro02 />
      <Intro03 />
      <Intro04 />
      <Intro05 />
    </div>
  )
}

export default IntroPage