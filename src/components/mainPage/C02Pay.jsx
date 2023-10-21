import React from 'react'

const C02Pay = () => {

  return (
    <div className="container mx-auto grid grid-cols-12 p-3 max-w-screen-xl">
      {/* 나중에 글씨 폰트 디자인 넣을것 */}
      {/* 여백용박스 */}
      <div className="col-span-0 md:col-span-1">
      </div>

      <div className="col-span-12 md:col-span-6">
        <p className="text-left">
          잔여코인 확인
        </p>
        <p className="text-left">
          현재 코인 : 2개
        </p>
        <p className="text-left">
          필요 코인 : -1개
        </p>
        <p className="text-left">
          시선분석 서비스를 이용하기 위해서는 코인이 1개 필요합니다. 코인사용 버튼을 누르면 시선 분석이
          시작됩니다.
        </p>

        <button>
          <p className="">
            버튼
          </p>

        </button>
      </div>

      <div className="col-span-12 md:col-span-4">
        <img
          src="https://i.ibb.co/vmWSTyD/content-inside.jpg"
          alt="content-inside"
          className="mx-auto"
        />
      </div>

      {/* 여백용박스 */}
      <div className="col-span-0 md:col-span-1">
      </div>

    </div>
  )
}

export default C02Pay