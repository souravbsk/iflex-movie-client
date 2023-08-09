import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:"",
    reducers:{
        setSearchText: (state, action) => {
           return state = action.payload
          }
    }
})

export const {setSearchText} = searchSlice.actions;
export default searchSlice.reducer;