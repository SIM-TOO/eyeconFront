import React from 'react'

const Intro04 = () => {
    return (
        <div className="font-Pretendard">

            {/* 여백용 박스 */}
            <div className="container mx-auto grid grid-cols-12 gap-4 max-w-screen-xl p-3">
                <div className="col-span-12 w-[50px] h-[45px] md:w-[100px] md:h-[90px]" />
            </div>

            {/* AI챗 이미지 */}
            <div className="w-64 md:w-auto">
                <img
                    src="https://i.ibb.co/yFd8xnM/AI.png"
                    alt="intro4"
                    className="h-auto pointer-events-none"
                />
            </div>




        </div>
    )
}

export default Intro04