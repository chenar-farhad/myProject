import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("localUser") || undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("localUser", JSON.stringify(action.payload));
    },
    removeUser: (state, action) => {
      state.user = undefined;
      localStorage.removeItem("localUser");
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
