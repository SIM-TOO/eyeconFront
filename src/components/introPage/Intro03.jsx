import React from 'react'

const Intro03 = () => {
    return (
        <div className="font-Pretendard">
            {/* 디자인용 박스*/}
            <div className="container mx-auto grid grid-cols-12 gap-4 max-w-screen-xl p-3">
                <div className="col-span-3 md:col-span-5" />
                <div className="col-span-6 md:col-span-2 border border-[#696c73] rounded-lg">
                    <p className="text-center whitespace-nowrap text-sm  md:text-2xl font-bold text-[#696c73] py-[15px] p-2">
                        OUR SERVICES
                    </p>
                </div>
                <div className="col-span-3 md:col-span-5" />

                {/* 글씨칸*/}
                <div className="col-span-2" />
                <div className="col-span-8">
                    <p className="text-2xl md:text-7xl font-bold text-center text-[#37383c] p-3 whitespace-nowrap ">
                        Who We Serve
                    </p>
                </div>
                <div className="col-span-2" />

                
                {/* 박스칸*/}
                <div className='text-center md:text-left col-span-12 md:col-span-6'>
                    이미지 넣는곳
                    <p className="text-1xl md:text-4xl font-bold text-[#37383c] p-3">
                        시선분석AI {/* 제목작성하셈 */}
                    </p>
                    소매업 {/* 내용작성하셈 */}
                </div>
                <div className='text-center md:text-left col-span-12 md:col-span-6'>
                    이미지 넣는곳
                    <p className="text-1xl md:text-4xl font-bold text-[#37383c] p-3">
                        chatbot {/* 제목작성하셈 */}
                    </p>
                    BB {/* 내용작성하셈 */}
                </div>
                <div className='text-center md:text-left col-span-12 md:col-span-6'>
                    이미지 넣는곳
                    <p className="text-1xl md:text-4xl font-bold text-[#37383c] p-3">
                        매대 분석 {/* 제목작성하셈 */}
                    </p>
                    CC {/* 내용작성하셈 */}
                </div>
                <div className='text-center md:text-left col-span-12 md:col-span-6'>
                    이미지 넣는곳
                    <p className="text-1xl md:text-4xl font-bold text-[#37383c] p-3">
                        DD {/* 제목작성하셈 */}
                    </p>
                    DD {/* 내용작성하셈 */}
                </div>
            </div>




        </div>
    )
}

export default Intro03