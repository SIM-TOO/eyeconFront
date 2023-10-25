import React from "react";

const img = () => {
    return (
        <div>
            <div className="w-64 md:w-auto dark:bg-gray-800 dark:text-[#F2F2F2]">
                <div className="h-[150px] bg-white dark:bg-gray-800" />
                <img
                    src="https://i.ibb.co/5TcWgzd/price.png"
                    alt="pay1"
                    className="h-auto pointer-events-none"
                />
            </div>

            <div className="container mx-auto grid grid-cols-12 max-w-screen-xl font-Pretendard dark:bg-gray-800 dark:text-[#F2F2F2] dark:bg-gray-800 dark:text-[#F2F2F2]">
                <div className="col-span-12 md:col-span-5">
                    {/* 첫번째 줄 내용 겹치는 박스 */}
                    <div className="box md:absolute md:top-40 relative p-6 sm:p-3 md:p-5">
                        <p className="text-4xl md:text-7xl font-bold">REASONABLE<br />
                            GOOD<br />
                            PRICE</p>
                    </div>
                </div>

                <div className="md:col-span-7 dark:bg-gray-800 dark:text-[#F2F2F2]">
                    <img
                        src="https://i.ibb.co/vmWSTyD/content-inside.jpg"
                        alt="content-inside"
                        border="0"
                        className={`hidden md:block`}
                    />
                </div>

                {/* 나중에 글씨 폰트 디자인 넣을것 */}
                <div className="col-span-12 md:col-span-5 dark:bg-gray-800 dark:text-[#F2F2F2]" />
                <div className="col-span-12 md:col-span-2 text-center">
                    <br />
                    <p className="text-2xl font-bold text-[#001D6C]">Pricing</p>
                    <p className="text-4xl font-bold">서비스 플랜</p>
                    <br />
                </div>
                <div className="col-span-12 md:col-span-5" />
            </div>
        </div>
    )
}

export default img