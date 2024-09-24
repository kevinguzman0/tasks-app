import taskSliceReducer from './slices/task.reducer';
import {
  reducer as taskReducerApi,
  reducerPath as taskReducePath,
} from './apis/task.api';
import {combineReducers} from '@reduxjs/toolkit';

export default combineReducers({
  [taskReducePath]: taskReducerApi,
  taskSliceReducer: taskSliceReducer,
});
