import { createSlice } from "@reduxjs/toolkit";

const initialState = {
amount: 0
};

export const earningsSlice = createSlice({
  name: "earnings",
  initialState,
  reducers: {
    addEarningsRedux: (state, action) => {
      state.amount +=  parseInt(action.payload )
    },
    substractEarningsRedux:(state,action)=>{
        state.amount = state.amount - parseInt(action.payload)
    }
  },
});

export const { addEarningsRedux,substractEarningsRedux} = earningsSlice.actions;

export default earningsSlice.reducer;