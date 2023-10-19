import React from 'react'

const Intro02 = () => {
    return (
        <div>
            {/* 색깔있는 박스 위치 */}
            <div className="container mx-auto grid grid-cols-12 gap-4 max-w-screen-xl p-3">
                <div className="col-span-2" />
                <div className="col-span-10 w-[70px] h-[60px] bg-[#d9d9d9] md:w-[200px] md:h-[180px]" />

            </div>

            <div className="flex flex-row-reverse items-center ">
                <div className="w-64 md:w-auto">
                    <img src="https://i.ibb.co/dQ4mzLc/image.png" alt="intro3" className="h-auto pointer-events-none" />
                </div>
            </div>

            {/* 글자 크기에 따라 col 위치 변경 할것 */}
            <div className="container mx-auto grid grid-cols-12 gap-4 max-w-screen-xl p-3">
                <div className="col-span-9" />
                <div className="col-span-3">

                    {/* 텍스트 밑줄 둥근 박스 */}
                    <p className="relative">
                        <span className="relative z-10">Our Service Process that</span>
                        <div className="absolute w-[0px] md:w-[200px] h-[10px] bg-[#d9d9d9] top-[15px] rounded-full"></div>
                    </p>
                    <p>we apply</p>
                </div>

            </div>
        </div>
    )
}

export default Intro02