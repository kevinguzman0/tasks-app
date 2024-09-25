// src/hooks/useTasks.ts
import {
  useGetTasksQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} from '@store/apis/task.api';

export const useTasks = () => {
  const {
    data: tasks,
    error: getTasksError,
    isLoading: isGetTasksLoading,
  } = useGetTasksQuery();
  const [
    createTask,
    {
      isLoading: isCreateTaskLoading,
      isSuccess: isCreateTaskSuccess,
      isError: isCreateTaskError,
    },
  ] = useCreateTaskMutation();
  const [
    updateTask,
    {
      isLoading: isUpdateTaskLoading,
      isSuccess: isUpdateTaskSuccess,
      isError: isUpdateTaskError,
    },
  ] = useUpdateTaskMutation();
  const [
    deleteTask,
    {
      isLoading: isDeleteTaskLoading,
      isSuccess: isDeleteTaskSuccess,
      isError: isDeleteTaskError,
    },
  ] = useDeleteTaskMutation();

  return {
    tasks,
    getTasksError,
    isGetTasksLoading,
    createTask,
    isCreateTaskLoading,
    isCreateTaskSuccess,
    isCreateTaskError,
    updateTask,
    isUpdateTaskLoading,
    isUpdateTaskSuccess,
    isUpdateTaskError,
    deleteTask,
    isDeleteTaskLoading,
    isDeleteTaskSuccess,
    isDeleteTaskError,
  };
};
