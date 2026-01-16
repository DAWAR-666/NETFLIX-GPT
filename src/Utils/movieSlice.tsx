import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlaying:null,
        trailerVideoId:null
    },
    reducers:{
        addNowMovies:(state,action)=>{
            state.nowPlaying=action.payload;
        },
        addTrailerVideoId:(state,action)=>{
            state.trailerVideoId=action.payload;
        }
    }
});
export const {addNowMovies,addTrailerVideoId}=movieSlice.actions;
export default movieSlice.reducer;