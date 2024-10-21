const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload
      state.isAuthenticated = true
      state.isLoading = false
    },
    clearUser: (state)=> {
      state.user = null
      state.isAuthenticated = false
      state.isLoading= false
    },
    setLoading: (state, action)=> {
      state.isLoading = action.payload
    }
  },
});
