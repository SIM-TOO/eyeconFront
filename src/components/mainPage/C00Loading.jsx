import React from 'react'
import Lottie from 'react-lottie-player';
import lottieJson from '../../lottie/loading.json';
import lottieJson2 from '../../lottie/mobileLoading.json';
import lottieJson3 from '../../lottie/loading5.json';

const C00Loading = () => {
  return (
    <div>
      {/* 데스크탑 로딩 화면 */}
      <div className='hidden sm:block' style={{ position: 'relative' }}>
        <Lottie
          loop
          animationData={lottieJson}
          play
          option={{ speed: 0.3 }}
          style={{ position: 'absolute', top: '0', left: '0', width: '100%', maxWidth: '1400px', borderRadius: '1%', overflow: 'hidden' }}
        />
        <Lottie
          loop
          animationData={lottieJson3}
          play
          option={{ speed: 0.2 }}
          style={{ opacity: 1, position: 'absolute', top: '150px', left: '480px', zIndex: '999', width: '100%', maxWidth: '400px', borderRadius: '1%', overflow: 'hidden' }}
        />
      </div>

      {/* 모바일 로딩 화면 */}
      <div className='md:hidden mt-40'>
        <Lottie
          loop
          animationData={lottieJson2}
          play
          option={{ speed: 0.7 }}
          style={{ width: '100%', maxWidth: '1400px', borderRadius: '1%', overflow: 'hidden' }}
        />
      </div>
    </div>
  )
}

export default C00Loading