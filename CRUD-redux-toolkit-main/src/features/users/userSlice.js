import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      // console.log(action.payload);
      if (
        action.payload.title === "" ||
        action.payload.categories == "" ||
        action.payload.content == ""
      ) {
        // return console.error("This is invalid");
        return alert("Please eneter all the values!!");
      } else {
        state.push(action.payload);
        console.log(state.action);
      }
    },
    editUser: (state, action) => {
      const { id, title, categories, content } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        existingUser.title = title;
        existingUser.categories = categories;
        existingUser.content = content;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        return state.filter((user) => user.id !== id);
      }
    },
  },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
