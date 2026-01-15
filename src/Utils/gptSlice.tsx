import { createSlice } from "@reduxjs/toolkit";


const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        GptButton:false
    },
    reducers:{
        toggleGptButton:(state,action)=>{
            state.GptButton=!state.GptButton;
        }
    }
});
export const {toggleGptButton}=gptSlice.actions;
export default gptSlice.reducer;