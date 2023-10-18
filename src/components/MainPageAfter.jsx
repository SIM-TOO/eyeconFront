import React from 'react'
import Header from './Header'
function MainPageAfter() {
  return (
    <div
      className='bg-cover bg-no-repeat h-screen'
      style={{
        backgroundImage: 'url("https://i.ibb.co/Q8M7ycH/Kakao-Talk-20231018-121457122.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
      <Header />

      <div
        className='flex flex-col items-center justify-center h-screen'
      >

        <div
          className="w-1/2 h-1/2 rounded-2xl"
          style={{
            background: 'linear-gradient(179.97deg, #fff 0.05%, rgba(255,255,255,0) 99.98%)',
            boxShadow: '0px 4px 30px 0 rgba(190,190,190,0.47)',
          }}
        ></div>


      </div>
    </div>
  )
}

export default MainPageAfter