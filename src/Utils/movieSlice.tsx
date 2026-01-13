import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlaying:[]
    },
    reducers:{
        addNowMovies:(state,action)=>{
            state.nowPlaying=action.payload;
        }
    }
});
export const {addNowMovies}=movieSlice.actions;
export default movieSlice.reducer;