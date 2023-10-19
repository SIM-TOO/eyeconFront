import React from 'react'

function List() {
  return (

    // 마트 리스트 목록 & 리스트 추가 될때마다 버튼 생성
    <div className='grid grid-cols-12 gap-4'>

      <div className='col-span-4 p-4 text-center w-[auto] h-[auto]' style={{ filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25)" }}>


        <div className=' w-[auto] h-[auto] rounded-[35px] bg-white' style={{ boxShadow: "1px 1px 1px 0 rgba(0,0,0,0.1", backgroundColor: "PALEGOLDENROD" }}>
          <p className='text-5xl font-bold text-center text-black '>시선 분석 결과</p>
          <div className='col-span-7 p-4 h-[auto] left-[auto] top-[auto] rounded-[20px] bg-[#15c3a7] text-center' style={{ boxShadow: "2px 6px 0 rgba(0,0,0,0.25)" }}>
            <p className='top-auto left-auto font-bold text-neutral-100' style={{ width: 'auto', whiteSpace: 'nowrap', overflow: 'hidden' }}>A마트</p>
          </div>
          <div className='w-[auto] h-[auto]  overflow-hidden rounded-3x1 bg-[#f9f9f9]/[0.84] border-2 border-black/10'>
            <p className='fext-2xl font-bold text-left text-[#535353]'>2023-10-19</p>
            <div className="flex justify-start items-start w-[auto] h-[auto] gap-2 p-2 rounded-[20px] border border-[#15c3a7]">
              <div className="w-[auto] h-[auto]">
                <div className="w-[auto] h-[auto] left-[auto] top-[auto] rounded-[9px] bg-[#15c3a7]" />
                <p className=" w-[auto] h-[auto] left-[auto] top-3 text-base font-medium text-left text-white">
                  다운로드
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>

  )
}

export default List;