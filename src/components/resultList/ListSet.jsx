import React from 'react';

function List() {
  return (

    <div className='grid grid-cols-12 gap-4'>

      <div className='col-span-3'/>

      <div className='col-span-6'>
        <div className='w-[25%] h-[auto]' style={{ filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.25))' }}>
          <div className='w-[auto] h-[auto] bg-[#15c3a7] rounded-[20px]' style={{ boxShadow: '2px 6px 4px 0 rgba(0,0,0,0.25)' }}>
            <p className='text-2xl font-bold text-center text-neutral-700'>A마트</p>
          </div>

        </div>
        <div className='w-[auto] h-[auto] rounded-[35px] bg-white' style={{ boxShadow: "1px 1px 1px 0 rgba(0,0,0,0.1)" }}>
          <p className='text-5xl font-bold text-center text-black'> 시선 분석 결과 </p>
          <p className='text-2xl font-bold text-right text-black'>↓ 최신순</p>
          <div className='grid grid-cols-3  bg-[#f9f9f9] border-2'>
            <p className='col-span-3 text-5xl font-bold text-left text-black'>2023-10-19</p>

            <div className='col-span-1'>
              <img src="https://i.ibb.co/wKLDFT2/image-36.png" alt="image-36" border="0" />
            </div>
            
            
            <div className='col-span-1'>
              <img src="https://i.ibb.co/wYpgY2J/Rectangle.png" alt="Rectangle" border="0" />
            </div>

            <div className='col-span-1'>
              자룸ㅇ나ㅣ룸ㄴ이ㅏ룸ㄴ이ㅏㄹ</div>

          </div>
        </div>
      </div>
      <div className='col-span-3'/>
    </div>
  );
}

export default List;
