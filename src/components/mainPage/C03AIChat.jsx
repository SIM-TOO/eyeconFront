import React from 'react'

const C03AIChat = ({ handleButtonClick }) => {
  return (
    <div className='container mx-auto grid grid-cols-12 p-3 max-w-screen-xl h-[100%]'>
      C03AIChat












       {/* 임시버튼 */}
       <button
        className="col-span-12"
        onClick={() => handleButtonClick(4)}
      >
       이미지 업로드 페이지 이동 버튼 (임시버튼임 나중에 삭제 할 예정)
      </button>
      {/* 임시버튼 */}
    </div>

  )
}

export default C03AIChat