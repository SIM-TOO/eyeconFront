import React from 'react';


const List = () => {

  return (

    <div className="container font-Pretendard mx-auto grid grid-cols-12 max-w-screen-x">
      <div className='col-span-12 grid grid-cols-12 gap-4 flex items-center'>
        <div className='col-span-4' />


        <div className='col-span-3' />
      </div>

      <div className='col-span-1 md:col-span-2' />
      {/* 이거, 모바일화면에서는 col-span-10이 맞는데, pc화면에서는 조금 줄일 거 고려해야할듯 */}
      <div className='bg-white col-span-10 md:col-span-8 flex flex-col justify-center items-center rounded-[25px] border' style={{
        width: "100%", height: "100%", padding: "20px"
      }}>
        <div>
          <p className='text-1xl font-bold text-left text-black p-4'> 내 가게 선택 ↓ </p>
          <p className='text-5xl font-bold text-center text-black p-4'> 시선 분석 결과 </p>
          <p className='text-2xl font-bold text-right text-black p-4'>↓ 최신순</p>


          <div className="col-span-5 grid gird-cols-10  md:col-span-4 group rounded-lg border border-[#d9d9d9] p-5  bg-[#FFFFFF] bg-opacity-10">
            <p className='text-2xl font-bold text-left text-black p-2 col-span-'> 2023-10-30 </p>
            <svg className='col-span-'>
              <line y1="0.5" x2={486} y2="0.5" stroke="#CACACA" />
            </svg>
            <div className='col-span- md:col-span- bg-white rounded-[20px]' style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}>
              <img src="https://i.ibb.co/wKLDFT2/image-36.png" alt="image-36" border="0" />
              <div className='col-span- md:col-span-'>
                <p className='text-2xl font-bold text-left p-2'> 시선분석 전 </p>
                <div className='col-span- md:col-span- border-[1.5px] border-[#19ab93] rounded-[20px] w-[116px] h-auto text-center'>
                  Download ↓
                </div>
                <p className='text-[11px] font-medium text-left'>
                  <span>시선 분석 전 매대 사진입니다.</span>
                  <br />
                  <span> 다운로드를 원하시면 버튼을 눌러주세요.</span>
                </p>
              </div>
            </div>
            <div className='col-span- md:col-span- bg-white rounded-[20px]' style={{boxShadow: "0 4px 4px 0 rgba(0,0,0,0.25)"}}>
            <img src="https://i.ibb.co/wYpgY2J/Rectangle.png" alt="Rectangle" border="0"/>
            <div className='col-span- md:col-span-'>
              <p className='text-2xl font-bold text-right'> 시선 분석 후</p>
              <div className='col-span- md:col-span- border-[1.5px] border-[#19ab93] rounded-[20px]'>
                Download ↓
              </div>
              <p className='text-[11px] font-medium text-right'> 
              <span> 시선 분석 후 매대 사진입니다. 색깔이 있는 곳이 고객들의 </span>
              <br />
              <span> 시선이 많이 머무는 곳입니다. 다운르도를 원하시면 </span>
              <br />
              <span> 버튼을 눌러주세요.</span>
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className='col-span-3' />
    </div>

  );
};







export default List;
