import React from 'react'
import HeaderAfter from './HeaderAfter';
import ResultMain from './resultList/ResultMain';

function ResultPage() {

  return (
    <div className="h-screen bg-no-repeat bg-cover md:bg-[url('https://i.ibb.co/Q8M7ycH/Kakao-Talk-20231018-121457122.png')] dark:bg-[url('https://i.ibb.co/PD92ZQZ/1.png')]">
      {/* 헤더 */}
      <HeaderAfter />

      {/* 결과 컴포넌트 */}
      <ResultMain />

    </div>


  )



}

export default ResultPage;