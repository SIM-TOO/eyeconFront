import React from 'react'
import Header from './Header'
import AfterHeader from './AfterHeader'


function MainPageAfter() {
  return (
    <div 
    className='bg-cover bg-no-repeat h-screen'
    style={{
        backgroundImage: 'url("https://i.ibb.co/Q8M7ycH/Kakao-Talk-20231018-121457122.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
      }}>
        <AfterHeader />
        MainPageAfter</div>
  )
}

export default MainPageAfter