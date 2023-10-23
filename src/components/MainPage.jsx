import React from 'react'
import Header from './Header'
import Intro01 from './introPage/Intro01'
import Intro02 from './introPage/Intro02'
import Intro03 from './introPage/Intro03'
import Intro04 from './introPage/Intro04'
import Intro05 from './introPage/Intro05'

function MainPage() {
  return (
    <div>
      <Header />

      <Intro01/>
      <Intro02/>
      <Intro03/>
      <Intro04/>
      <Intro05/>
    </div>
  )
}

export default MainPage