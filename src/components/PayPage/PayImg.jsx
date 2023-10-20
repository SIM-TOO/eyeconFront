import React from "react";

const img = () => {
    return (
        <div>
            <div className="w-64 md:w-auto">
                <img
                    src="https://i.ibb.co/5TcWgzd/price.png"
                    alt="pay1"
                    className="h-auto pointer-events-none"
                />
            </div>

            <div className="container mx-auto grid grid-cols-12 max-w-screen-xl">
                <div className="col-span-12 md:col-span-5">
                    {/* 첫번째 줄 내용 겹치는 박스 */}
                    <div className="box md:absolute md:top-40 relative p-6 sm:p-3 md:p-5">
                        <p className="text-4xl md:text-7xl font-bold">REASONABLE<br />
                            GOOD<br />
                            PRICE</p>
                    </div>
                </div>

                <div className="md:col-span-7">
                    <img
                        src="https://i.ibb.co/vmWSTyD/content-inside.jpg"
                        alt="content-inside"
                        border="0"
                        className={`hidden md:block`}
                    />
                </div>

                {/* 나중에 글씨 폰트 디자인 넣을것 */}
                <div className="col-span-12 md:col-span-5" />
                <div className="col-span-12 md:col-span-2 text-center">
                    <p>Pricing</p>
                    <p>서비스 플랜</p>
                </div>
                <div className="col-span-12 md:col-span-5" />
            </div>
        </div>
    )
}

export default img