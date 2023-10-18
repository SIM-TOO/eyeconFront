import React from 'react'
import { useSelector } from "react-redux"
import Header from './Header'
function MainPage() {

  let test = useSelector((state) => { return state })

  return (
    <div>
      <Header />
      <main className="mx auto">
        <p className="w-[1045.29px] h-[195.71px] text-[220px] font-bold text-left uppercase text-stroke-1 text-[#33E0C4] fill-[#ffffff]">
          테스트
        </p>
        ;<div className="container mx-11 p-5 mx auto"></div>
      </main>
    </div>
  )
}

export default MainPage