import React from 'react'
import Lottie from 'react-lottie-player';
import lottieJson from '../../lottie/loading.json';

const LoadingComponent01 = () => {
  return (
    <div>

      <Lottie
        loop
        animationData={lottieJson}
        play
        option={{ speed: 0.5 }}
        style={{ width: '100%', maxWidth: '1400px', borderRadius: '1%', overflow: 'hidden' }}
        className='rounded-lg'
      />
    </div>
  )
}

export default LoadingComponent01