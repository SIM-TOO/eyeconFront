import React from "react";
import { useSelector } from "react-redux";

function Pay() {

    


    return (
        <div className="img">
         <img src="https://i.ibb.co/5TcWgzd/price.png" alt="price" border="0"/>
         <img src="https://i.ibb.co/XsRtS66/REASONABLE-GOOD-PRICE.jpg" alt="REASONABLE-GOOD-PRICE" border="0"/>
         <img src="https://i.ibb.co/vmWSTyD/content-inside.jpg" alt="content-inside" border="0"/>
         <h3>PRICING</h3>
         <h1>서비스 플랜</h1>

         <p className="text-center p-4 font-semibold">eyecon은 소비자의 데이터를 정밀하게 분석해 매대의 시선 배치를 정확히 분석합니다.
            효과적인 마케팅 방법을 고민 중인 소매업자를 위한 다양한 플랜이 준비되어 있습니다.
        </p>
        <div className="">
        <i class="w-16 h-16 bg-blue-500">BASIC</i>
        <span>\25,000</span>
        <p>5 Coins</p>
        <p>10 Shares</p>
        <p>Custom Domains</p>
        </div>
        <div className="">
        <i class>PREMIUM</i>
        <span>\75,000</span>
        <p>15 Coins</p>
        </div>
        <div>
        <i>PRO</i>
        <span>\150,000</span>
        <p>30 Coins</p>
        <p>Unlimited</p>
        <p>Custom Brand</p>
        </div>
        </div>
    )   
    
}

export default Pay