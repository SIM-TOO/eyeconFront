import React from 'react'

const Intro01 = () => {
    return (
        <div>
            <div className="w-64 md:w-auto">
                <img src="https://i.ibb.co/0YBkn3z/service.png" alt="intro1" className="h-auto pointer-events-none" />
            </div>
            <div className="container mx-auto grid grid-cols-12 gap-4 max-w-screen-xl">


                <div className="col-span-12 md:col-span-6">

                    {/* 첫번째 줄 내용 겹치는 박스 */}
                    <div className="box md:absolute md:top-40">
                        WELCOME TO
                            EYE CON
                            with AI CHATBOT
                        <div className="md:block hidden">----------------</div>
                    </div>

                    {/* 두번째 줄 내용 겹치는 박스 */}
                    <div className="">
                        시선 분석 AI를 통해 매대를 정밀하게 분석하고
                        소비자의 시선을 예측해보세요
                        소비자의 시선이 향하는 곳에 매출이 있습니다.

                        Where the eyes go, sales are there

                        우리는 챗봇을 통해 이용자들의 요구사항을 확인합니다.
                        서비스에 필요한 정보들을 챗봇에게 말하고 서비스를 이용해보세요.
                        상권, 성별, 연령대를 바탕으로 최적의 시선배치를 도와줍니다.
                        우리의 서비스는 챗봇 AI를 통해 더욱 정확해지고, 빨라졌습니다.
                    </div>

                    {/* 버튼 만드는 자리 */}
                    <div className="container mx-auto grid grid-cols-6" >
                        <div className="col-span-4"></div>
                        <button className="col-span-2 ">Get strated</button>
                    </div>

                </div>
                {/* 모바일이 사리짐 */}
                <div className="col-span-6 md:block hidden">
                    <img src="https://i.ibb.co/CBj6Kn6/Group-624891.png" alt="intro2" className="h-auto pointer-events-none" />
                </div>
            </div>
        </div>
    )
}

export default Intro01