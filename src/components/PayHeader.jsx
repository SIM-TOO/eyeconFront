import React from "react";

const Header = () => {
    return (
        <><div>
            <header className=" text-white p-5">
                <div className="container mx-auto">
                    <img src="https://i.ibb.co/7R0ySQh/logo.png" alt="logo" border="0"></img>
                </div>
            </header>
            <div class="flex items-center">
                <div class="relative w-1/3">
                    <img src="https://i.ibb.co/5TcWgzd/price.png" alt="price" border="0" width={500} height={500} class="absolute left-5" />
                    <img src="https://i.ibb.co/XsRtS66/REASONABLE-GOOD-PRICE.jpg" alt="REASONABLE-GOOD-PRICE" border="0" class="absolute top-5 left-10 w-30 h-20" />
                </div>
                <div class="w-1/3">
                    <img src="https://i.ibb.co/vmWSTyD/content-inside.jpg" alt="content-inside" border="0" class="mx-auto" />
                </div>
            </div>
            <div class="text-center">
                <h3 class="text-[#001d6c] font-bold text-xl">PRICING</h3>
                <h1 class="text-[42px] font-bold self-stretch">서비스 플랜</h1>
                <p className="text-center p-4 font-semibold">eyecon은 소비자의 데이터를 정밀하게 분석해 매대의 시선 배치를 정확히 분석합니다.효과적인 
                <br/>
                마케팅 방법을 고민 중인 소매업자를 위한 다양한 플랜이 준비되어 있습니다.
                </p>
            </div>
        </div>
        <div>
        <p className="w-[1045.29px] h-[195.71px] text-[220px] font-bold text-left uppercase font-[33E0C4]">price</p>;
            </div></>
    )
}

export default Header