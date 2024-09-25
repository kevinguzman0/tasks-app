import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Task} from '@src/types/task.type';

export interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<Task>) => {
      state.tasks = {
        ...state.tasks,
        ...action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {setTasks} = taskSlice.actions;

export default taskSlice.reducer;
