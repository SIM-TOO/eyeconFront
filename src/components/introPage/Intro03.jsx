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
                <div className="col-span-2 " />
                <div className="col-span-8 ">
                    <p className="text-2xl md:text-7xl font-bold text-center text-[#37383c] p-3 whitespace-nowrap ">
                        Who We Serve
                    </p>
                </div>
                <div className="col-span-2 " />

                
                {/* 박스칸*/}
                <div className='text-center md:text-left col-span-12 md:col-span-6 p-6 sm:p-3   '>
             
                <img
            src="https://i.ibb.co/g6B2pn5/icon1.png"
            alt="green1"
            className="mx-auto md:mx-0" 
        
          />
                    <p className="text-1xl md:text-4xl font-bold text-[#37383c] p-3">
                        시선분석AI {/* 제목작성하셈 */}
                    </p>
                    시선 분석 모델 AI를 통해서 매대에 시선이 향할 곳을 예측합니다.  성별, 연령별 소비자의 특성을 바탕으로 소비자의 시선을  분석합니다. {/* 내용작성하셈 */}
                </div>
                <div className='text-center md:text-left col-span-12 md:col-span-6 p-6 sm:p-3 '>
                <img
            src="https://i.ibb.co/JmsQV3x/icon2.png"
            alt="green2"
            className="mx-auto md:mx-0" 
          />
                    <p className="text-1xl md:text-4xl font-bold text-[#37383c] p-3">
                        소매업 {/* 제목작성하셈 */}
                    </p>
                  <p> 대형마트, 대기업 편의점 등과 같은 대형 업체들이 주로 받는 솔루션을 합리적인 가격에 이용할 수 있습니다 </p>  {/* 내용작성하셈 */}
                </div>
                <div className=' text-center md:text-left col-span-12 md:col-span-6 p-6 sm:p-3'>
                <img
            src="https://i.ibb.co/qyfG3bk/logo3.png"
            alt="green3"
            className="mx-auto md:mx-0" 
          />
                    <p className="text-1xl md:text-4xl font-bold text-[#37383c] p-3">
                        chatbot {/* 제목작성하셈 */}
                    </p>
                   <p> eyecon은 챗봇을 활용해 AI와 실시간으로 대화하며 이용자들이 타겟으로 하는 대상과 여러 정보들을 명확히 합니다. </p>  {/* 내용작성하셈 */}
                </div>
                <div className='text-center md:text-left col-span-12 md:col-span-6 p-6 sm:p-3 '>
                <img
            src="https://i.ibb.co/CbP0kXr/logo4.png"
            alt="green4"
            className="mx-auto md:mx-0" 
          />
                    <p className="text-1xl md:text-4xl font-bold text-[#37383c] p-3">
                        매대분석 {/* 제목작성하셈 */}
                    </p>
                   <p> 우리 서비스는 가게의 매대를 분석합니다. 제품의 매출에 큰 영향을 주는 매대를 분석해 고객의 시선을 예측하고 효과적인 솔루션을 제공합니다 </p> {/* 내용작성하셈 */}
                </div>
            </div>




        </div>
    )
}

export default Intro03