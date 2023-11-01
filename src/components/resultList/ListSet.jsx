import React from 'react';


const List = () => {

  return (

    <div className='flex flex-col items-center'>
      <div className='w-[70%] h-[100%] rounded-2xl bg-white grid grid-cols-12 p-3 gap-4 items-center text-center justify-center container mx-auto' style={{ boxShadow: "1px 1px 1px 0 rgba(0,0,0,0.1)" }}>
        <div className='col-span-12'>
        <p className='font-bold text-2xl'> 시선 분석 결과 </p>
        </div>
        <button className='rounded-[15px] bg-[#46cfb9] text-[13px] font-bold text-white'> 내 가게 선택 </button>
        <div className='col-span-4'>
        <p className='font-bold text-2xl'> ↓ 최신순 </p>  
        </div>
        <div className='rounded-[10px] col-span-12 h-full grid grid-cols-12 p-3 bg-white rounded shadow border border-[#DEE2E7]'>
          <div className='col-span-12'>
            <p className='font-2xl font-bold'>2023-11-01</p>
          </div>
          <div className='col-span-4 rounded-[10px] p-3 bg-white rounded shadow border border-[#DEE2E7] flex items-center justify-center'>
            <img src="https://i.ibb.co/wKLDFT2/image-36.png" alt="image-36" border="0" className='mx-auto' />
            <div className='col-span-1'>
            <p className='p-3'> 시선 분석 전 </p>
            <button className='rounded-[20px] border-[1.5px] border-[#19ab93]'>Download ↓</button>
            </div>
            <p className='p-2'>
              시선 분석 전 매대 사진입니다.
              다운로드를 원하시면 버튼을 눌러주세요.
            </p>
          </div>
          <div className='col-span-4 rounded-[10px] h-auto w-auto p-3 bg-white rounded shadow border border-[#DEE2E7] flex items-center justify-center'>
            <img src="https://i.ibb.co/wYpgY2J/Rectangle.png" alt="Rectangle" border="0" className='mx-auto'/>
            <div className='col-span-1'>
            <p className='p-3'> 시선 분석 후</p>
            <button className='rounded-[20px] border-[1.5px] border-[#19ab93]'>Download ↓</button>
            </div>
            <p className='p-2'>
              시선 분석 후 매대 사진입니다. 색깔이 있는 곳이 고객들의
              시선이 많이 머무는 곳입니다. 다운로드를 원하시면 버튼을
              눌러주세요.
            </p>
          </div>
          <div className='col-span-8'>
            <p>
              광주 동구 상업단지 상권 40대 남성을 타겟으로 한 매대 시선분석 결과입니다.
              현재 광주 동구 충장로 상권의 경우 40대 남성을 주 대상으로 하고 있습니다.
              주요 연령대와 성별을 대상으로 한 매대 시선 분석 결과를 활용해 마케팅에 활용해보세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}






export default List;
