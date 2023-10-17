import React from 'react'
import { useSelector } from "react-redux"
import Header from './Header'
function MainPage() {

    let test = useSelector((state) => { return state } )

    return (
    <div>
    <Header/>

    </div>
  )
}

export default MainPage