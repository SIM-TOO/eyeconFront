import React from 'react'

const C02Pay = ({ handleButtonClick }) => {
  return (
    <div className='text-center items-center justify-center container mx-auto grid grid-cols-12 p-3  gap-4 max-w-screen-xl h-[100%]'>

      {/* 나중에 다시 만들예정 */}
      {/* 여백용박스 */}
      <div className="col-span-12 h-[20%]" />

      <div className="col-span-12 grid grid-cols-12 h-[50%]">
        {/* 나중에 글씨 폰트 디자인 넣을것 */}
        {/* 여백용박스 */}
        <div className="col-span-0 md:col-span-1 h-[100%]" />
        <div className="col-span-12 md:col-span-4 p-3 bg-white ">
          <p className="text-2xl font-bold text-left text-[#505050]">잔여코인 확인</p>
          <p className="text-left">
            현재 코인 : 2개 <br />
            필요 코인 : -1개 <br />
          </p>
          <div className="h-[2px] bg-[#e4e4e4]" />
          <p className="text-left">
            시선분석 서비스를 이용하기 위해서는 코인이 1개 필요합니다. 코인사용 버튼을 누르면 시선 분석이
            시작됩니다
          </p>
          <button>
            버튼
          </button>
        </div>



        <div className="col-span-12 md:col-span-4">
          <img
            src="https://i.ibb.co/vmWSTyD/content-inside.jpg"
            alt="content-inside"
            className="mx-auto"
          />
        </div>

        {/* 여백용박스 */}
        <div className="col-span-0 md:col-span-1" />
      </div>
      <div className="col-span-12 h-[10%]" />

      <div className="col-span-12 h-[20%]">
        2번
      </div>

      {/* 임시버튼 */}
      <button
        className="col-span-12"
        onClick={() => handleButtonClick(3)}

      >
        AI 페이지 이동 버튼 (임시버튼임 나중에 삭제 할 예정)
      </button>
      {/* 임시버튼 */}
    </div>
  )
}

export default C02Pay