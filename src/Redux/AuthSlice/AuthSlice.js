import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: null,
  loading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    signOutUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, setLoading, signOutUser, clearUser } =
  authSlice.actions;
export default authSlice.reducer;
