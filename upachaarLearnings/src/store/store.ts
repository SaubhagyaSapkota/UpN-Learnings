import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "../slice/counterSlice";
import  formSlice  from "../slice/formSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    form: formSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
