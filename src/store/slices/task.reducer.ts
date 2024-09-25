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
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
    createTask: (state, action: PayloadAction<Task>) => {
      state.tasks = [...state.tasks, action.payload];
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(task => task._id !== action.payload);
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      state.tasks = state.tasks.map(task =>
        task._id === action.payload._id ? action.payload : task,
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {setTasks, createTask, deleteTask, updateTask} = taskSlice.actions;

export const selectTasks = (state: {taskSliceReducer: TaskState}) =>
  state.taskSliceReducer;

export default taskSlice.reducer;
