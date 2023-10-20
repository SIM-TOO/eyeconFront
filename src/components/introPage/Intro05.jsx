import React from 'react'
const Intro05 = () => {
    return (
        <div className="font-Pretendard relative">
            {/* 여백용 박스 */}
            <div className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]" />

            {/* 내용 적는 곳 */}
            <div className='bg-[#FBFBFB] '>
                <div className="container mx-auto grid grid-cols-12 gap-4 max-w-screen-xl p-3">

                    {/* 여백용 박스 */}
                    <div className="col-span-12 md:h-20 h-10" />

                    {/* 첫번째 */}
                    <div className="col-span-12 md:col-span-5">
                        <div style={{ height: '80px' }} className="flex md:block items-center justify-center">
                            <img
                                src="https://i.ibb.co/XXscVvr/Group-6348.png"
                                alt="logo"
                            />
                        </div>

                        <p className='text-center md:text-left'>
                            Eyecon is always thinking from the customer's <br />
                            point of viewThink about how to deliver the <br />
                            most valuable and good information. eyecon <br />
                            uses chatbots to provide different services to <br />
                            customers. AI-powered services can provide <br />
                            higher quality information.
                        </p>
                    </div>

                    {/* 두번째 */}
                    <div className="col-span-12 md:col-span-3 items-center">
                        <div className="md:h-20 h-10 md:flex items-center block text-center">
                            <p className="text-2xl font-bold">
                                Our Services
                            </p>
                        </div>

                        <ul className="list-none md:list-disc text-center md:text-left">
                            <li>eye-tracking</li>
                            <li>AI CHATBOT</li>
                            <li>Commercial analysis</li>
                        </ul>
                    </div>

                    {/* 세번째 */}
                    <div className="col-span-12 md:col-span-3 items-center ">
                        <div className="md:h-20 h-10 md:flex items-center block text-center">
                            <p className="text-2xl font-bold whitespace-nowrap ">
                                Contact Us
                            </p>
                        </div>
                        <div className="text-center md:text-left">
                            <p>주소</p>
                            <p>전화</p>
                            <p>메일</p>
                        </div>
                    </div>

                    {/* 여백용 박스 */}
                    <div className="col-span-12 md:h-20 h-10" />

                </div>
                {/* 페이지소개? */}
                <div className="bg-[#00bfa1]">
                    <p className="text-center text-xl text-[#fbfbfb] whitespace-nowrap p-4">
                        Copyright © 2023 eyecon
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Intro05