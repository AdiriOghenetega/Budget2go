import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from 'redux-persist';

const initialState = {
record:[]
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpenseRedux: (state, action) => {
      state.record.push(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => {
      return initialState;
    });
  },
});

export const { addExpenseRedux} = expenseSlice.actions;

export default expenseSlice.reducer;