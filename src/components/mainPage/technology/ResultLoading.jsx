import React from 'react'
import Lottie from 'react-lottie-player';
import lottieJson2 from '../../../lottie/mobileLoading.json';

const ResultLoading = () => {
    return (
        <div className=''>
            로딩중 로딩중 기달려주세요
            <Lottie
                loop
                animationData={lottieJson2}
                play
                option={{ speed: 0.7 }}
            />
        </div>
    )
}

export default ResultLoading