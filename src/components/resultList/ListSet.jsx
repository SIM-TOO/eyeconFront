import React from 'react';


const List = () => {

  return (

    <div className="container font-Pretendard mx-auto grid grid-cols-12 max-w-screen-x">

      <div className='col-span-4 md:col-span-2' />
      {/* 이거, 모바일화면에서는 col-span-10이 맞는데, pc화면에서는 조금 줄일 거 고려해야할듯 */}
      <div className='bg-white col-span-10 md:col-span-8 flex flex-col justify-center items-center rounded-[25px] border' style={{
        width: "100%", height: "100%", padding: "20px"
      }}>
        <div>
          <div className='col-span-12 gird grid-cols-12'>
            <div className='col-span-4' />
            <p className='text-5xl font-bold text-center text-black p-4'> 시선 분석 결과 </p>
            <div className='grid grid-cols-4 gap-4'>
              <button className='text-1xl font-bold text-left text-black col-span-2 rounded-[15px] bg-[#46cfb9] border-[3px] border-[#46cfb9] text-[#FFFFFF] w-[35%]' style={{ boxShadow: "0px 2px 4px 0 rgba(0,0,0,0.43)" }}>
                내 가게 선택 ↓
              </button>
              <p className='text-2xl font-bold text-right text-black col-span-2'>↓ 최신순</p>
            </div>
            <div className='col-span-4' style={{ marginTop: "15px" }} />
          </div>

          <div className="col-span-16 grid gird-cols-16  md:col-span-4 group rounded-lg border border-[#d9d9d9] p-5  bg-[#FFFFFF] bg-opacity-10">
            <p className='text-4xl font-bold text-left text-black' style={{height:"50px"}}> 2023-10-30 </p>
            <svg className='col-span-3'>
              <line y1="0.5" x2={486} y2="0.5" stroke="#CACACA" />
            </svg>
            <div className='bg-white rounded-[20px]' style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}>
              <img src="https://i.ibb.co/wKLDFT2/image-36.png" alt="36" border="0" />
                <div className='grid grid-cols-2'>
                  <p className='text-2xl font-bold text-left p-2 order-1'> 시선분석 전 </p>
                  <button className='border-[1.5px] border-[#19ab93] rounded-[20px] text-center order-2' style={{ margin: "10px" }}>
                    Download ↓
                  </button>
                </div>
                <p className='text-[11px] font-medium text-left' style={{ paddingBottom: "5px", paddingLeft: "10px" }}>
                  <span>시선 분석 전 매대 사진입니다.</span>
                  <br />
                  <span> 다운로드를 원하시면 버튼을 눌러주세요.</span>
                </p>
            </div>
            <div className='col-span-2' />
            <div className='bg-white rounded-[20px]' style={{ boxShadow: "0 4px 4px 0 rgba(0,0,0,0.25)" }}>
              <img src="https://i.ibb.co/wYpgY2J/Rectangle.png" alt="Rectangle" border="0" />
              <div className='grid grid-cols-2'>
                <p className='text-2xl font-bold text-left p-2 order-1'> 시선 분석 후</p>
                <button className='border-[1.5px] border-[#19ab93] rounded-[20px] w-[116px] h-auto text-center order-2' style={{ margin: "10px" }}>
                  Download ↓
                </button>
              </div>
                <p className='text-[11px] font-medium text-rigth' style={{ paddingBottom: "5px", paddingLeft: "10px" }}>
                  <span>시선 분석 후 매대 사진입니다. 색깔이 있는 곳이 고객들의 </span>
                  <br />
                  <span>  시선이 많이 머무는 곳입니다. 다운로드를 원하시면 버튼을 </span>
                  <br />
                  <span> 눌러주세요. </span>  
                  <br />
                </p>
            </div>
            <div className='col-span-4' style={{margin:"15px"}}>
              <p className='text-xl opacity-75 text-center text-[#313131]'>
                <span> 광주 동구 상업단지 상권 40대 남성을 타겟으로 한 매대 시선분석 결과입니다.</span>
                <br />
                <span> 현재 광주 동구 충장로 상권인 경우 40대 남성을 주 대상으로 하고 있습니다. 주</span>
                <br />
                <span> 요 연령대와 성별을 대상으로 한 매대 시선 분석 결과를 활용해 마케팅에 활용해</span>
                <br />
                <span> 보세요.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='col-span-3' />
    </div>

  );
};







export default List;
