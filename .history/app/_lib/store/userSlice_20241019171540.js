const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  user: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action) {
      state.user.push(action.payload);
    },
  },
});
