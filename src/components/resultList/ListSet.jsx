import React from 'react';


// 다운로드 및 모든 데이터 함수
const ListItem = ({ date, img1, img2, description }) => {
  return (

    <div className='font-Pretendard grid grid-cols-3 border-2 gap-4 p-4  rounded-3xl border-2 border-black/10 bg-[F9F9F9]' style={{ marginBottom: "45px" }}>
      <p className='col-span-3 text-2xl text-left text-black'>{date}</p>

      <div className='col-span-1 border border-[#15c3a7] flex justify-center items-center m-3 p-3 rounded-[35px]' id="item1">
        <img src={img1} alt="image1" className='object-contain w-[auto] h-[auto] justify-center items-center' />
      </div>

      <div className='col-span-1 border border-[#15c3a7] flex justify-center items-center p-3 m-3 rounded-[35px]' id='item2'>
        <img src={img2} alt="heatmap" className='object-contain w-[auto] h-[auto] justify-center items-center' />
      </div>

      <div className='col-span-1'>
        <p className='text-base text-[#313131] text-center' style={{ marginTop: "65px" }}>{description}</p>
      </div>

      <button className='col-span-1 text-2xl text-center text-white rounded-[10px] bg-[#15c3a7] whitespace-nowrap mb-4 flex justify-center items-center '>
        다운로드
        <img src="https://i.ibb.co/s38LqgC/Vector.png" alt="Vector" className='w-[auto] h-[auto] flex items-center justify-center  p-2' />
      </button>
      <button className='col-span-1 text-2xl text-center text-white rounded-[10px] bg-[#15c3a7] whitespace-nowrap mb-4 flex justify-center items-center'>
        다운로드
        <img src="https://i.ibb.co/s38LqgC/Vector.png" alt="Vector" className='w-[auto] h-[auto] flex items-center justify-center  p-2' />
      </button>
      <div className='col-span-1' />
    </div>
  );
};

// 이미지 및 날짜 부가 설명 함수
const List = () => {
  const items = [
    {
      date: "2023-10-19",
      img1: "https://i.ibb.co/wKLDFT2/image-36.png",
      img2: "https://i.ibb.co/wYpgY2J/Rectangle.png",
      description: "광주 북구 공장단지 상권 40대 남성을 타겟으로 한 메대 시선분석 결과입니다."
    },
    // 추가 항목들...
    {
      date: "2023-10-21",
      img1: "https://i.ibb.co/wKLDFT2/image-36.png",
      img2: "https://i.ibb.co/wYpgY2J/Rectangle.png",
      description: "안녕하세용"
    }
  ];


  return (
    // 마트 나열 함수
   
      <div className="container font-Pretendard mx-auto grid grid-cols-12 max-w-screen-x">
        <div className='col-span-12 grid grid-cols-12 gap-4 flex items-center'>
          <div className='col-span-4' />
          {["A마트", "B마트", "C마트", "D마트"].map((mart, index) => (
            <div className={`col-span-1 rounded-t-[15px] ${index === 0 ? 'bg-[#15c3a7]' : 'bg-[#A9A9A9]'}`}>
              <p className='text-2xl  font-bold text-center text-neutral-700' style={{ transform: 'scale(1.0)' }}>{mart}</p>
            </div>
          ))}


          <div className='col-span-3' />
        </div>

        <div className='col-span-1 md:col-span-2' />
        {/* 이거, 모바일화면에서는 col-span-10이 맞는데, pc화면에서는 조금 줄일 거 고려해야할듯 */}
        <div className='col-span-10 md:col-span-8 flex flex-col justify-center items-center rounded-[25px] border' style={{ width: "100%", height: "100%", padding: "20px" }}>
          <div>
            <p className='text-5xl font-bold text-center text-black p-4'> 시선 분석 결과 </p>
            <p className='text-2xl font-bold text-right text-black p-4'>↓ 최신순</p>

            {items.map(item => <ListItem {...item} />)}
          </div>
        </div>

        <div className='col-span-3' />
      </div>
   
      );
};

      export default List;
