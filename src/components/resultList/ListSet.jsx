import React from 'react';

function ListItem({ date, img1, img2, description }) {
  return (
    <div className='grid grid-cols-3 border-2 gap-4 p-4'> {/* padding 추가 */}
      <p className='col-span-4 text-1xl text-2xl text-left text-black'>{date}</p>
      <div className='col-span-1 border border-[#15c3a7] flex items-center m-4 p-2' id="item1"> {/* margin 추가 */}
        <img src={img1} alt="image" border="0" className='object-contain w-[auto] h-[auto]' />
      </div>
      <div className='col-span-1 border border-[#15c3a7] flex items-center p-2 m-4' id='item2'> {/* margin 추가 */}
        <img src={img2} alt="heatmap" border="0" className='object-contain w-[auto] h-[auto]' />
      </div>
      <div className='col-span-1'>
        <p className='text-base text-[#313131] text-center'>{description}</p>
      </div>
    </div>
  );
}

function List() {
  const items = [
    {
      date: "2023-10-19",
      img1: "https://i.ibb.co/wKLDFT2/image-36.png",
      img2: "https://i.ibb.co/wYpgY2J/Rectangle.png",
      description: "광주 북구 공장단지 상권 40대 남성을 타겟으로 한 메대 시선분석 결과입니다."
    },
    // 추가 항목들...
  ];

  return (
    <div className='grid grid-cols-12 gap-4 bg-light-blue'>
      <div className='col-span-3' />

      <div class="col-span-6 flex flex-col justify-center items-center rounded-[25px]" style={{ width: "100%", height: "100%", padding: "20px" }}> {/* padding 추가 */}
        <div style={{ boxShadow: "rgba(0, 0, 0, 0.25) 1px 1px 1px", borderRadius: "25px", width: "100%", height: "100%" }}> {/* 부모 요소 추가 */}
          <div className='w-[auto] h-[auto] bg-white'>
            <div className='w-[25%] h-[auto] rounded-[20px] bg-[#15c3a7] item-left' style={{ boxShadow: "2px 6px 4px rgba(0,0,0,0.25)" }}>
              <p className='text-2xl font-bold text-center text-neutral-700'>A마트</p>
            </div>
            <p className='text-5xl font-bold text-center text-black'> 시선 분석 결과 </p>
            <p className='text-2xl font-bold text-right text-black'>↓ 최신순</p>
            {items.map(item => <ListItem {...item} />)}

            <div className='grid grid-cols-3 items-start'>
              <div className='col-span-1'>
                <button className="text-sm md:text-2xl text-center text-white rounded-[10px] bg-[#15c3a7] whitespace-nowrap w-[65%] h-[auto] mb-4 flex justify-center items-center">
                  다운로드
                  <img src="https://i.ibb.co/s38LqgC/Vector.png" alt="Vector" border="0" className='w-[auto] h-[auto] flex items-center justify-center ' />
                </button>
              </div>
              <div className='col-span-1'>
                <button className="text-sm md:text-2xl text-center text-white rounded-[10px] bg-[#15c3a7] whitespace-nowrap w-[65%] h-[auto] flex justify-center items-center">
                  다운로드
                  <img src="https://i.ibb.co/s38LqgC/Vector.png" alt="Vector" border="0" className='w-[auto] h-[auto] flex items-center justify-center' />
                </button>
              </div>
              <div className='col-span-1' />
            </div>
          </div>
        </div>
      </div>

      <div className='col-span-3' />
    </div>

  );
}

export default List;
