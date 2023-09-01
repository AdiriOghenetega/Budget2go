import { createSlice } from "@reduxjs/toolkit";

const initialState = {
firstName: "",
lastName: "",
email: "",
mobile: ""
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserRedux: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.mobile = action.payload.mobile;
    }
  },
});

export const { addUserRedux} = userSlice.actions;

export default userSlice.reducer;