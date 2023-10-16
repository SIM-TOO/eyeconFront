import React from 'react'
import { useSelector } from "react-redux"
import Header from './Header'
function MainPage() {

    let test = useSelector((state) => { return state } )

    return (
    <div>
    <Header/>
    <p>--------------</p>
    <p>메인</p>
    <h1 className="text-5xl font-bold underline">
      Hello world!
    </h1>
    <p>{test.title}</p>
    <p>우리팀은 : {test.user}</p>
    <p>--------------</p>
    </div>
  )
}

export default MainPage