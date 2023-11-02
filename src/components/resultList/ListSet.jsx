import React from 'react';

const dates = ['2023-11-01'];

const data = [
  {
    image: 'https://i.ibb.co/6Y1kC07/image.jpg',
    title: '시선분석 전',
    buttonText: 'DOWNLOAD ↓',
    description: '시선 분석 전 매대 사진입니다. 다운로드를 원하시면 버튼을 눌러주세요.',
  },
  {
    image: 'https://i.ibb.co/61WLv05/image.jpg',
    title: '시선분석 후',
    buttonText: 'DOWNLOAD ↓',
    description: '시선 분석 후 매대 사진입니다. 색깔이 있는 곳이 고객들의 시선이 많이 머무는 곳입니다. 다운로드를 원하시면 버튼을 눌러주세요.',
  }
];

// 컴포넌트로 추출된 상단 부분
function Header() {
  return (
    <div className="col-span-12 grid grid-cols-12 gap-2 p-2">
      <div className="col-span-4 p-2" />
      <p className="col-span-4 font-bold text-2xl text-center p-2">시선 분석 결과</p>
      <div className="col-span-4 p-2" />
    </div>
  );
}

// 컴포넌트로 추출된 "내 가게 선택" 부분
function StoreSelection() {
  return (
    <div className="col-span-12 grid grid-cols-12 gap-4 p-2">
      <div className="col-span-2 flex items-center p-1" />
      <button className="rounded-[15px] bg-[#46cfb9] border border-[#46cfb9] p-1 col-span-2" style={{ boxShadow: "0px 2px 4px 0 rgba(0,0,0,0.43)", color: "white" }}>
        내 가게 선택
      </button>
      <div className='col-span-4' />
      <div className='flex items-center justify-end col-span-2'>
        <p className="text-right p-1 text-2xl text-bold">↓ 최신순</p>
      </div>
    </div>
  );
}

function DateAndData({ date, data }) {
  return (
    <><div className='col-span-12 grid grid-cols-12'>
      <div className='col-span-2' />
      <div className="col-span-8 grid grid-cols-8 rounded-[10px] bg-white rounded shadow border border-[#DEE2E7] p-1 flex items-center justify-center">
        <div className="col-span-8 grid grid-cols-8 gap-4 p-2">
          <p className="col-span-4 p-2 text-bold text-2xl">{date}</p>
          <div className="col-span-4 p-2" />
        </div>
        <div className="col-span-12 grid grid-cols-12">
          {data.map((item, index) => (
            <div key={index} className="col-span-12 md:col-span-6 p-2">
              <div className="rounded-[10px] h-full grid grid-cols-12 bg-white rounded shadow border border-[#DEE2E7]">
                <div className='col-span-12 grid grid-cols-12'>
                  <img src={item.image} alt="이미지" className="w-full h-full object-cover col-span-12" />
                </div>
                <div className="col-span-12 grid grid-cols-12 flex items-center justify-end p-2">
                  <p className="text-xl font-semibold text-bold col-span-4">{item.title}</p>
                  <div className="col-span-4" />
                  <button className="rounded-[20px] border-[1.5px] border-[#19ab93] col-span-4 font-semibold p-[3px]">{item.buttonText}</button>
                </div>
                <div className="col-span-12 grid grid-cols-12">
                  <p className="text-base text-bold col-span-12">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-12">
          <p className='opacity-75 text-base'>
            광주 동구 상업단지 상권 40대 남성을 타겟으로 한 매대 시선분석 결과입니다.
            현재 광주 동구 충장로 상권의 경우 40대 남성을 주 대상으로 하고 있습니다.
            주요 연령대와 성별을 대상으로 한 매대 시선 분석 결과를 활용해 마케팅에 활용해보세요.
          </p>
        </div>
        <div className='col-span-12 grid grid-cols-12 gap-4'>
          <button className='bg-[#46cfb9] col-span-12 text-[15px] font-semibold text-center text-white'>매대상품배치 하기</button>
        </div>
      </div>
    </div></>
  );
}

const List = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-[100%] md:w-[70%] rounded-2xl dark:bg-gradient-[#0a0a0a] bg-gradient-[#fff]">
        <div className="container mx-auto grid grid-cols-12 md:col-span-8 gap-4 max-w-screen-xl h-full p-1">
          <div className="col-span-12 grid grid-cols-12 rounded-[10px] md:col-span-12 bg-white rounded shadow border border-[#DEE2E7] p-1">
            <Header />
            <StoreSelection />
            {dates.map((date, index) => (
              <DateAndData key={index} date={date} data={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
  