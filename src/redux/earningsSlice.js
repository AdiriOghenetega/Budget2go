import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from 'redux-persist';

const initialState = {
amount: 0,
spent:[]
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
        state.spent.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, (state) => {
      return {
        ...state,
        spent : []
      }
    });
  },
});

export const { addEarningsRedux,substractEarningsRedux} = earningsSlice.actions;

export default earningsSlice.reducer;