import React from 'react'
import Lottie from 'react-lottie-player';
import lottieJson from '../../lottie/check.json';

const PayLoading = () => {
  return (
    <div>
    {/* 반응형 화면 사이즈 수정 예정 */}

    <Lottie
      loop
      animationData={lottieJson}
      play
      option={{ speed: 0.7 }}
      style={{ width: '100%', maxWidth: '400px' }}
    />
  코인이 사용되었습니다.
  </div>
  )
}

export default PayLoading