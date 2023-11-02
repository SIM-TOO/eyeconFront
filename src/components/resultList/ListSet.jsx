import React from 'react';

const List = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[95%] md:w-[70%] rounded-2xl p-4">
        <div className="container mx-auto grid grid-cols-12 gap-4 max-w-screen-xl h-full p-4">
          <div className='col-span-12 grid grid-cols-12 rounded-[10px] bg-white rounded shadow border border-[#DEE2E7] p-3'>
            <div className='col-span-12 grid grid-cols-12 gap-2 p-4'>
              <div className='col-span-4 p-4' />
              <p className='col-span-4 font-bold text-2xl text-center p-4'>시선 분석 결과</p>
              <div className='col-span-4 p-4' />
            </div>
            <div className='col-span-12 grid grid-cols-12 gap-4 p-1'>
              <div className='col-span-3 flex items-center p-1'>
                <button className="rounded-[15px] bg-[#46cfb9] border border-[#46cfb9] p-1" style={{ boxShadow: "0px 2px 4px 0 rgba(0,0,0,0.43)", color: "white" }}>
                  내 가게 선택
                </button>
              </div>
              <div className='col-span-9 flex items-center justify-end p-1'>
                <p className='text-right p-2'>↓ 최신순</p>
              </div>
            </div>
            <div className='col-span-12 grid grid-cols-12 rounded-[10px] bg-white rounded shadow border border-[#DEE2E7] p-3'>
              <div className='col-span-12 grid grid-cols-12 gap-4 p-2'>
                <p className='col-span-4 p-2 text-bold text-2xl'>2023-11-01</p>
                <div className='col-span-4 p-2' />
                <div className='col-span-4 p-2' />
              </div>
              <div className="rounded-[10px] col-span-12 h-full md:col-span-5 grid grid-cols-12 p-3 bg-white rounded shadow border border-[#DEE2E7]">
                <img src="https://i.ibb.co/6Y1kC07/image.jpg" alt="image" border="0" />
              </div>
              <div className=''/>
              <div className="rounded-[10px] col-span-12 h-full md:col-span-5 grid grid-cols-12 p-3 bg-white rounded shadow border border-[#DEE2E7]">
                <img src="https://i.ibb.co/61WLv05/image.jpg" alt="image" border="0" />
              </div>
              <div className='col-span-12'>
                <p>
                  광주 동구 상업단지 상권 40대 남성을 타겟으로 한 매대 시선분석 결과입니다.
                  현재 광주 동구 충장로 상권의 경우 40대 남성을 주 대상으로 하고 있습니다.
                  주요 연령대와 성별을 대상으로 한 매대 시선 분석 결과를 활용해 마케팅에 활용해보세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
