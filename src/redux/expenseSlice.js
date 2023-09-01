import { createSlice } from "@reduxjs/toolkit";

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
});

export const { addExpenseRedux} = expenseSlice.actions;

export default expenseSlice.reducer;