import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  createTaskName: "",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    insertTasks(state, action) {
      state.tasks = [...action.payload];
    },

    updateTaskName(state, action) {
      state.createTaskName = action.payload;
    },

    clearTaskState(state) {
      state.tasks = [];
    },
  },
});

export const { insertTasks, updateTaskName, clearTaskState } =
  taskSlice.actions;

export default taskSlice.reducer;
