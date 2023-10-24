import React from 'react'
import ResultLoading from './technology/ResultLoading'


const C05Result = ({ handleButtonClick }) => {
  return (
    <div>

    {/* 정보가 올떄까지 로딩할 페이지 */}
    <ResultLoading/>

    {/* 임시버튼 */}
            <button
        className="col-span-12"
        onClick={() => handleButtonClick(1)}
      >
        처음 페이지 이동 버튼 (임시버튼임 나중에 삭제 할 예정)
      </button>
      {/* 임시버튼 */}
    </div>
  )
}

export default C05Result