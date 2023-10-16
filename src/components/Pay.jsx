import React from "react";
import { useSelector } from "react-redux";
import price from "../img/price.jpg";
import reasonable from "../img/Reasonble.jpg";
import conent from "../img/content.jpg";

function Pay() {

    


    return (
        <div className="img">
         <img src={price} alt="" />
         <img src={reasonable} alt="" />
         <img src={conent} alt="" />
         <h3>PRICING</h3>
         <h1>서비스 플랜</h1>

         <p>eyecon은 소비자의 데이터를 정밀하게 분석해 매대의 시선 배치를 정확히 분석합니다.
            효과적인 마케팅 방법을 고민 중인 소매업자를 위한 다양한 플랜이 준비되어 있습니다.
        </p>
        <div className="option">
        <p></p>
        <span>\25,000</span>
        </div>
        </div>
    )   
    
}

export default Pay