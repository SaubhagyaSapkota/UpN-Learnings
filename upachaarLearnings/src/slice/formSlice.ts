import { createSlice,type PayloadAction } from "@reduxjs/toolkit";

interface User {
  name: string;
  email: string;
  address: string;
  age: number;
  education: string;
}

interface FormState{
    users: User[]
}
const initialState: FormState = {
  users: []
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
  },
});

export const { addUser } = formSlice.actions;
export default formSlice.reducer;
