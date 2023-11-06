import React, { useRef } from 'react'
import ProductTest02 from '../testPage/ProductTest02'
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
const ResultMoveList = ({ beforeimg, hitmap, onImageNull }) => {

  const componentRef = useRef();

  // const handleCapture = async () => {
  //   if (!componentRef.current) return;

  //   try {
  //     const canvas = await html2canvas(componentRef.current);
  //     canvas.toBlob((blob) => {
  //       if (blob !== null) {
  //         saveAs(blob, "component.png");
  //       }
  //     });
  //   } catch (error) {
  //     console.error("Error converting component to image:", error);
  //   }
  // };

  return (
    <div className="rounded-2xl" style={{ background: "linear-gradient(179.97deg, #fff 0.05%, rgba(255,255,255,0) 99.98%)", boxShadow: "0px 4px 30px 0 rgba(190,190,190,0.47)" }}>

      <button onClick={onImageNull} className="mt-4 ml-8 rounded-3xl border-[2px] border-[#19ab93] p-2 text-[#19ab93] text-sm font-bold">← 돌아가기</button>


      {/* <button className="rounded-3xl border-[2px] border-[#19ab93] p-2 text-sm font-bold" onClick={handleCapture} > capture </button> */}

      <ProductTest02 beforeimg={beforeimg} hitmap={hitmap}/>
    </div>

  )
}

export default ResultMoveList