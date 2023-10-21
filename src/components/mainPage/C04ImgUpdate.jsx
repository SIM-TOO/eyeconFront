import React from 'react'

const C04ImgUpdate = ({ handleButtonClick }) => {
  return (
    <div>

      이미지 업로드 컴포넌트


      {/* 임시버튼 */}
      <button
        className="col-span-12"
        onClick={() => handleButtonClick(5)}
      >
        결과 페이지 이동 버튼 (임시버튼임 나중에 삭제 할 예정)
      </button>
      {/* 임시버튼 */}
    </div>
  )
}

export default C04ImgUpdate