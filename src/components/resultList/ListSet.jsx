import React from 'react';


const List = () => {

  return (

    <div className='flex flex-col items-center'>
      <div className='w-[80%] h-[100%] rounded-2xl bg-white grid grid-cols-12 p-3 gap-4 items-center text-center justify-center container mx-auto' style={{ boxShadow: "1px 1px 1px 0 rgba(0,0,0,0.1)" }}>
        <p className='font-bold text-2xl'> 시선 분석 결과 </p>
        <button className='rounded-[15px] bg-[#46cfb9]'> 버튼 </button>
        <p className='font-bold text-2xl'> 최신순 </p>
        <div className='rounded-[10px] col-span-12 h-full grid grid-cols-12 p-3 bg-white rounded shadow border border-[#DEE2E7]'>
          <p className='font-2xl font-bold'>2023-11-01</p>
          <svg className='col-span-4'>
            <line y1="0.5" x2={486} y2="0.5" stroke="#CACACA" />
          </svg>
          <div className='rounded-[10px] col-span-3 h-full p-3 bg-white rounded shadow border border-[#DEE2E7]'>

          </div>
          <div className='rounded-[10px] col-span-3 h-full p-3 bg-white rounded shadow border border-[#DEE2E7]'>

          </div>
          <p> text </p>

        </div>
      </div>
    </div>
  )
}






export default List;
