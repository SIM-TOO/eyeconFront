import React from 'react';

const List = () => {
  return (
    <div className="flex items-center justify-center w-[100%] h-screen">
      <div className="w-[95%] md:w-[70%] rounded-2xl dark:bg-gradient-[#0a0a0a] bg-gradient-[#fff] p-4" style={{ background: "linear-gradient(179.97deg, #fff 0.05%, rgba(255,255,255,0) 99.98%)", boxShadow: "0px 4px 30px 0 rgba(190,190,190,0.47)" }}>
        <div className="container mx-auto grid grid-cols-12 gap-4 max-w-screen-xl h-full">
          <div className="col-span-12 grid grid-cols-12 gap-2 p-4">
            <div className='col-span-4 p-4'/>
            <p className='col-span-4 font-bold text-2xl text-center p-4'>시선 분석 결과</p>
            <div className='col-span-4 p-4'/>
          </div>
          <div className='col-span-6 gird-cols-6'>
            <button className="rounded-[15px] bg-[#46cfb9] border border-[#46cfb9] col-span-2" style={{ boxShadow: "0px 2px 4px 0 rgba(0,0,0,0.43)", color: "white" }}>
              내 가게 선택
            </button>
            <div className='col-span-2'/>
            <p className='col-span-2'>↓ 최신순</p>
          </div>
          <div className="col-span-4 rounded-[10px] bg-white rounded shadow border border-[#DEE2E7]">
            <img src="https://i.ibb.co/6Y1kC07/image.jpg" alt="image" border="0" className='mx-auto' />
            <div className="col-span-4">
              <p>시선분석 전</p>
              <button className="rounded-[15px] rounded-[20px] border-[1.5px] border-[#19ab93] col-span-2">DOWNLOAD ↓</button>
            </div>
            <p>
              시선 분석 전 매대 사진입니다.
              다운로드를 원하시면 버튼을 눌러주세요.
            </p>
          </div>
          <div className="col-span-4 rounded-[10px] bg-white rounded shadow border border-[#DEE2E7]">
            <img src="https://i.ibb.co/61WLv05/image.jpg" alt="image" border="0" className='mx-auto' />
            <div className="col-span-4">
              <p>시선분석 전</p>
              <button className="rounded-[15px] rounded-[20px] border-[1.5px] border-[#19ab93] col-span-2">DOWNLOAD ↓</button>
            </div>
            <p>
              시선 분석 전 매대 사진입니다.
              다운로드를 원하시면 버튼을 눌러주세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
