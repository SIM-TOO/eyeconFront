import React from 'react';

function List() {
  return (


    <div className='grid grid-cols-12 gap-4'>
      <div className='col-span-3' />

      <div class="col-span-6 flex flex-col justify-center items-center rounded-[25px]" style={{ width: "100%", height: "100%", boxShadow: "1px 1px 1px 0 rgba(0,0,0,0.25)" }}>
        <div className='w-[25%] h-[auto] rounded-[20px] bg-[#15c3a7] item-left' style={{ boxShadow: "2px 6px 4px 0 rgba(0.0.0.25)" }}>
          <p className='text-2xl font-bold text-center text-neutral-700'>A마트</p>
        </div>
        <div className='w-[auto] h-[auto] bg-[A9FFF1]'>
          <p className='text-5xl font-bold text-center text-black'> 시선 분석 결과 </p>
          <p className='text-2xl font-bold text-right text-black'>↓ 최신순</p>
          <div className='grid grid-cols-4 border-2 gap-3'>
          <p className='col-span-1 text-1xl text-2xl text-left text-black'>2023-10-19</p>
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
          <button className="text-sm  md:text-2xl text-center text-white px-[35px] py-[15px] rounded-[10px] bg-[#15c3a7] whitespace-nowrap ">
            다운로드
            <img src="https://i.ibb.co/s38LqgC/Vector.png" alt="Vector" border="0" />
          </button>
        </div>
      </div>


      <div className='col-span-3' />
    </div >
  );
}

export default List;
