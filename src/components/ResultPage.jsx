import React from 'react'
import List from './resultList/ListSet';
import ResultList from './resultList/ListResult'
import ListSet from './resultList/ListSet'
import HeaderAfter from './HeaderAfter';

function ResultPage() {

  return (

    <div
      className="h-screen"
      style={{
        backgroundImage:
          'url("https://i.ibb.co/Q8M7ycH/Kakao-Talk-20231018-121457122.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <HeaderAfter />
      <div>
        <ListSet/>
      </div>
    </div>


  )



}

export default ResultPage;