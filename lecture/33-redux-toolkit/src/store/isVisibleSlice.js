import { createSlice } from "@reduxjs/toolkit";
//슬라이스 정의
const isVisibleSlice = createSlice({
  name: 'isVisible',
  initialState: true,
  reducers: {
    changeVisibility: (state)=>{
        return !state;
    }
  },
})

export const {changeVisibility} = isVisibleSlice.actions;

export default isVisibleSlice.reducers;