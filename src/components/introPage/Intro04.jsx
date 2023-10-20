import React from 'react';

const Intro04 = () => {
    return (
        <div className="font-Pretendard relative">
            {/* 여백용 박스 */}
            <div className="w-[50px] h-[45px] md:w-[100px] md:h-[90px]" />

            {/* 타이틀 이미지 */}
            <div className="w-64 md:w-auto relative">
                <img
                    src="https://i.ibb.co/yFd8xnM/AI.png"
                    alt="intro4"
                    className="h-auto pointer-events-none"
                />
            </div>

            {/* 컨테이너 박스 */}
            <div className="container mx-auto grid grid-cols-12  gap-4 max-w-screen-xl p-3">
                <div className="col-span-12 md:relative md:top-[-70px]">
                    <span className="relative">
                        <span className="relative z-10 text-4xl md:text-6xl font-bold">AI CHATBOT <br /> 그리고 시선분석</span>
                        <div className="absolute w-[50px] md:w-[400px] h-[20px] bg-[#15c3a7] top-[72px] rounded-full md:block hidden"></div>
                    </span>
                    <p className="col-span-12">
                        <br />
                        AI 챗봇을 활용해 우리는 서비스의 품질을 높입니다. 단순한 결과물이 아닌 인공지능이 분석한 <br />
                        결과물을 토대로 우리는 이용자들과 소통하고, 그것의 결과물로 이용자들의 더 나은 마케팅을 <br />
                        돕습니다.
                    </p>
                </div>
            </div>

            {/* 내용 적는 곳 */}
            <div className="container mx-auto grid grid-cols-12  gap-4 max-w-screen-xl p-3">
                <div className="col-span-12 md:col-span-6">
                    <div className=' grid grid-cols-4'>
                        {/* 첫번째 */}
                        <div className="col-span-1"><img src="https://i.ibb.co/dQGPp8B/pic1.png" alt="pic1" border="0" /></div>
                        <div className="col-span-3">
                            <p>Key Accessibility Choice</p>
                            <p>Lorem ipsum dolor sit amet, consectetur ad consectetur adipiscing elit ut aliquam, purus.</p>
                        </div>
                        {/* 두번째 */}
                        <div className="col-span-1"><img src="https://i.ibb.co/tbfmptY/pic2.png" alt="pic2" border="0" /></div>
                        <div className="col-span-3">
                            <p>Key Accessibility Choice</p>
                            <p>Lorem ipsum dolor sit amet, consectetur ad consectetur adipiscing elit ut aliquam, purus.</p>
                        </div>
                        {/* 세번째 */}
                        <div className="col-span-1"><img src="https://i.ibb.co/Ks6J4nN/pic3.png" alt="pic3" border="0" /></div>
                        <div className="col-span-3">
                            <p>Key Accessibility Choice</p>
                            <p>Lorem ipsum dolor sit amet, consectetur ad consectetur adipiscing elit ut aliquam, purus.</p>
                        </div>
                    </div>
                </div>
                {/* 이미지 */}
                <div className="col-span-6 md:block hidden">
                    <img
                        src="https://i.ibb.co/8bGbrfq/Frame-627042.png"
                        alt="intro5"
                        className="h-auto pointer-events-none"
                    />
                </div>
            </div>
        </div>

    );
}

export default Intro04;
