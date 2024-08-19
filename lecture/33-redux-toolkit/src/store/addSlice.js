import { createSlice } from "@reduxjs/toolkit";

const addSlice = createSlice({
  name: 'add',
  initialState: {number: 0},
  reducers:{
    plus: (state)=>{
      state.number += state.number;
    },
    minus: (state)=>{
      state.number -= state.number;
    }
  }
})

export const {plus, minus} = addSlice.actions;
export default addSlice.reducer;