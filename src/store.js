import { configureStore, createSlice } from '@reduxjs/toolkit'

let title = createSlice({
  name : 'title',
  initialState : '스마트인재개발원 마지막 프로젝트'
})

let user = createSlice({
    name : 'user',
    initialState : '지홍팀'
  })

export default configureStore({
  reducer: {
    title : title.reducer,
    user : user.reducer,
  }
})