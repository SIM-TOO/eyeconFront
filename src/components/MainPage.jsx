import React from 'react'
import Header from './Header'
import Intro01 from './introPage/Intro01'
import Intro02 from './introPage/Intro02'

function MainPage() {
  return (
    <div>
      <Header />
  
      {/* 첫번째  */}
      <Intro01/>
      <Intro02/>

    </div>
  )
}

export default MainPage