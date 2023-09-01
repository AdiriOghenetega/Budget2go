import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import earningsSliceReducer from "./earningsSlice";
import expenseSliceReducer from "./expenseSlice"




export const store = configureStore({
  reducer: {
    user : userSliceReducer,
    earnings :  earningsSliceReducer,
    expense : expenseSliceReducer,
  }
})