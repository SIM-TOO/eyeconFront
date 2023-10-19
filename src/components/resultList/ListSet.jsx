import React from 'react';

function List() {
  return (
    <div className='grid grid-cols-12 gap-4'>
      <div className='col-span-3' />
      <div className='col-span-6'>
        <div className='w-[25%] h-[auto]' style={{ filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.25))' }}>
          <div className='w-[auto] h-[auto] bg-[#15c3a7] rounded-[20px]' style={{ boxShadow: '2px 6px 4px 0 rgba(0,0,0,0.25)' }}>
            <p className='text-2xl font-bold text-center text-neutral-700'>A마트</p>
          </div>
        </div>
        <div className='w-[auto] h-[auto] rounded-[25px] bg-[A9FFF1]' style={{ boxShadow: "1px 1px 1px 0 rgba(0,0,0,0.1)" }}>
          <p className='text-5xl font-bold text-center text-black'> 시선 분석 결과 </p>
          <p className='text-2xl font-bold text-right text-black'>↓ 최신순</p>
          <div className='grid grid-cols-3  bg-[#f9f9f9] border-2'>
            <p className='col-span-3 text-5xl text-2xl text-left text-black'>2023-10-19</p>
            <div className='col-span-1 border border-[#15c3a7]'>
              <img src="https://i.ibb.co/wKLDFT2/image-36.png" alt="image-36" border="0" className='object-contain w-[auto] h-[auto]' />
            </div>
            <div className='col-span-1 border border-[#15c3a7]'>
              <img src="https://i.ibb.co/wYpgY2J/Rectangle.png" alt="Rectangle" border="0" className='object-contain w-[auto] h-[auto]' />
            </div>
            <div className='col-span-1'>
              <p className='text-base text-[#313131] text-center'>광주 북구 공장단지 상권 40대 남성을 타겟으로 한 메대 시선분석 결과입니다.</p>
            </div>
          </div>
        </div>
        <div className="">
          <button className="text-sm  md:text-2xl text-center text-white px-[35px] py-[15px] rounded-[10px] bg-[#15c3a7] whitespace-nowrap ">
            다운로드
          </button>
        </div>
      </div>
      <div className='col-span-3' />
    </div >
  );
}

export default List;
