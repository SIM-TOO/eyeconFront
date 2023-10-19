import React from 'react'

function List() {
  return (

    // 마트 리스트 목록 & 리스트 추가 될때마다 버튼 생성
    <div className='grid grid-cols-12 gap-4'>
        <div className='p-4 text-center w-[200px] h-[50px]' style={{filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25)"}}>
            <div className='p-4 w-[200px] h-[50px] absoulte left-[257.5px] top-[195.5px] rounded-[20px] bg-[#15c3a7]' style={{ boxShadow: "2px 6px 0 rgba(0,0,0,0.25)"}}>
                <p className='absolute left-[100px] top-[25px] text-2xl font-bold text-left text-neutral-100'>A마트</p>
            </div>
        </div>
        <div className='w-[1000px] h-[950px] rounded-[35px] bg-white' style={{boxShadow : "1px 1px 1px 0 rgba(0,0,0,0.1", backgroundColor : "PALEGOLDENROD"}}>
            <p className='text-5xl font-bold text-center text-black '>시선 분석 결과</p>
        </div>
        <div className='w-[850px] h-[350px] relative overflow-hidden rounded-3x1 bg-[#f9f9f9]/[0.84] border-2 border-black/10' style={{top:'520px'}}>
        </div>
    </div>
  )
}

export default List;