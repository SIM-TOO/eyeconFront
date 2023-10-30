import React from 'react';
import Lottie from 'react-lottie-player';
import lottieJson from '../../lottie/coineffect.json';
import lottieJson2 from '../../lottie/progress.json';

const CoinCheck = () => {
    return (

        <div className="font-Pretendard flex flex-col justify-center items-center">
            <div className="hidden md:block"><br /><br /><br /><br /><br /></div>
            <Lottie
                loop
                animationData={lottieJson}
                play
                option={{ speed: 0.1 }}
                style={{ width: "100%", maxWidth: "400px" }}
                className="mb-10 animate-bounce2"
            />
            <p className="text-4xl md:text-4xl font-bold text-center">
                코인이 충전되었습니다. <br/>
                잠시 후 메인 페이지로 이동합니다
            </p>
            <Lottie
                loop
                animationData={lottieJson2}
                play
                option={{ speed: 0.1 }}
                style={{ width: "100%", maxWidth: "600px" }}
                className="mb-10"
            />


  
        </div>
    );
};


export default CoinCheck