import React from 'react';

function DownloadButton() {
  return (
    <div className='grid grid-cols-2 items-start'>
      <div className='col-span-1 p-2'>
        <button className="text-2xl text-center text-white rounded-[10px] bg-[#15c3a7] whitespace-nowrap w-[65%] h-[auto] mb-4 flex justify-center items-center">
          다운로드
          <img src="https://i.ibb.co/s38LqgC/Vector.png" alt="Vector" className='w-[auto] h-[auto] flex items-center justify-center ' />
        </button>
      </div>
    </div>
  );
}

function ListItem({ date, img1, img2, description }) {
  return (
    <div className='grid grid-cols-3 border-2 gap-4 p-4 rounded-3xl border-2 border-black/10 bg-[F9F9F9]'>
      <p className='col-span-4 text-2xl text-left text-black'>{date}</p>
      <div className='col-span-1 border border-[#15c3a7] flex justify-center items-center m-3 p-3 rounded-[35px]' id="item1">
        <img src={img1} alt="image" className='object-contain w-[auto] h-[auto] justify-center items-center' />
      </div>
      <div className='col-span-1 border border-[#15c3a7] flex justify-center items-center p-3 m-3 rounded-[35px]' id='item2'>
        <img src={img2} alt="heatmap" className='object-contain w-[auto] h-[auto] justify-center items-center' />
      </div>
      <div className='col-span-1'>
        <p className='text-base text-[#313131] text-center' style={{ marginTop: "65px" }}>{description}</p>
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
    <div className="container mx-auto grid grid-cols-12 max-w-screen-x">
      <div className='col-span-12 grid grid-cols-12 gap-4 flex items-center'>
        <div className='col-span-4' />
        {["A마트", "B마트", "C마트", "D마트"].map(mart => (
          <div className='col-span-1 rounded-t-[15px] bg-[#15c3a7]'>
            <p className='text-2xl font-bold text-center text-neutral-700'>{mart}</p>
          </div>
        ))}
        <div className='col-span-3' />
      </div>

      <div className='col-span-3' />
      <div className='col-span-6 flex flex-col justify-center items-center rounded-[25px] border' style={{ width: "100%", height: "100%", padding: "20px" }}>
        <div>
          <p className='text-5xl font-bold text-center text-black p-4'> 시선 분석 결과 </p>
          <p className='text-2xl font-bold text-right text-black p-4'>↓ 최신순</p>
          {items.map(item => <ListItem {...item} />)}
          <DownloadButton />
        </div>
        <div>
        {items.map(item => <ListItem {...item} />)}
        <DownloadButton />
        </div>
      </div>

      <div className='col-span-3' />
    </div>
  );
}

export default List;
