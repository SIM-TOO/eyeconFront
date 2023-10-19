import React from "react";

const img = () => {
    return (
        <div className="grid grid-cols-12 gap-4">
            <div class="">
                <div class="">
                    <img src="https://i.ibb.co/5TcWgzd/price.png" alt="price" border="0" class="" />
                    <img src="https://i.ibb.co/XsRtS66/REASONABLE-GOOD-PRICE.jpg" alt="REASONABLE-GOOD-PRICE" border="0" class="" />
                </div>
                <div class="">
                    <img src="https://i.ibb.co/vmWSTyD/content-inside.jpg" alt="content-inside" border="0" class="" />
                </div>
            </div>
            <div class="">
                <h3 class="text-[#001d6c] font-bold text-xl">PRICING</h3>
                <h1 class="text-[auto] font-bold self-stretch">서비스 플랜</h1>
                <p className="text-center p-4 font-semibold">eyecon은 소비자의 데이터를 정밀하게 분석해 매대의 시선 배치를 정확히 분석합니다.효과적인 
                <br/>
                마케팅 방법을 고민 중인 소매업자를 위한 다양한 플랜이 준비되어 있습니다.
                </p>
            </div>
        </div>

    )
}

export default img