import React from 'react';
import Lottie from 'react-lottie-player'
import Header from "../HeaderAfter";
import lottieJson from '../../lottie/coineffect.json';
import lottieJson2 from '../../lottie/progress.json';
import useGetCoin from "../../hook/mainPage/useGetCoin";
import { useLocation } from 'react-router-dom';




const CoinCheck = () => {


    // localStorage에서 가져온 코인 수
    const storedCoins = localStorage.getItem('coinsData');
    const coins = JSON.parse(storedCoins);

    const remainingCoins = coins

    const location = useLocation();
    const coinmoney = location.state?.coinCount || 0; // 기본값 0으로 설정
    const coinCount = location.state?.coinCnt || 0; // 기본값 0으로 설정

    // 서버에서 코인 가져오는 함수
    const GetCoin = useGetCoin();
    const fetchCoinInfo = async () => {
        await GetCoin("");
    };
    fetchCoinInfo();



    return (
        <div>
            <Header />
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
                    {coinmoney}원 결제
                    {coinCount}원 결제 완료 <br />  </p>
                    <p className="text-4xl md:text-xl font-bold text-center">현재 잔여 코인 {remainingCoins}개<br /></p>
                   <p className="text-4xl md:text-4xl font-bold text-center"> 잠시 후 메인으로 이동합니다</p>
              
                <Lottie
                    loop
                    animationData={lottieJson2}
                    play
                    option={{ speed: 0.1 }}
                    style={{ width: "100%", maxWidth: "600px" }}
                    className="mb-10"
                />
            </div>
        </div>
    );
};


export default CoinCheck