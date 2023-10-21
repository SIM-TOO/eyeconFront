import React from 'react'
import Lottie from 'react-lottie-player';
import lottieJson from '../../lottie/loading.json';
const C00Loading = () => {
  return (
    <div>
    {/* 반응형 화면 사이즈 수정 예정 */}

    <Lottie
      loop
      animationData={lottieJson}
      play
      option={{ speed: 0.5 }}
      style={{ width: '100%', maxWidth: '1400px', borderRadius: '1%', overflow: 'hidden' }}
    />
  </div>
  )
}

export default C00Loading