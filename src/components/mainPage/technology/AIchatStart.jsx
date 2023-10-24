import React from 'react'

const AIchatStart = ({ onButtonClick }) => {
    return (
        <div className="h-[100%] col-span-12 md:col-span-5  flex flex-col items-center justify-center">
            {/* 이미지 */}
            <img
                src="https://i.ibb.co/C8B5YHB/Group-624909.png"
                alt="Group-624909"
                className='w-[50%] max-w-full max-h-full'
                border="0" />
            {/* 대화 시작하기 버튼 */}

            <div className='w-[100%] h-[20%] grid grid-cols-12 p-3'>
                <div className="col-span-12" />
                <div className="col-span-2"/>
                <button className="col-span-8 flex justify-center items-center p-3 rounded-lg bg-[#40c3ae]">
                    <p className='text-white' onClick={onButtonClick}>챗봇과 시선분석 시작하기</p>
                </button>
                <div className="col-span-2"/>
                
            </div>
        </div>

    )
}

export default AIchatStart