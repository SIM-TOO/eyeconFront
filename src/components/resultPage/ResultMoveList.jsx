import React from 'react'
import ProductTest02 from '../testPage/ProductTest02'

const ResultMoveList = ({ beforeimg, hitmap , onImageNull}) => {

  // beforeimg 이전 이미지
  // hitmap 히트맵 이미지

  return (
    <div className="rounded-2xl" style={{ background: "linear-gradient(179.97deg, #fff 0.05%, rgba(255,255,255,0) 99.98%)", boxShadow: "0px 4px 30px 0 rgba(190,190,190,0.47)" }}>
      <button onClick={onImageNull}>돌아가기</button>
      받아온 beforeimg
      <img src={beforeimg} alt="테스트" />
      받아온 hitmap
      <img src={hitmap} alt="테스트" />


      <ProductTest02 beforeimg={beforeimg} hitmap={hitmap} />
    </div>

  )
}

export default ResultMoveList