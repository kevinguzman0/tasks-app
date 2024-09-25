import {Task} from '@custom_types/task.type';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {APP_API_URL} from '../../../mocks/config';
import {setTasks} from '../slices/task.reducer';

export const taskApi = createApi({
  reducerPath: 'taskApi',
  baseQuery: fetchBaseQuery({baseUrl: APP_API_URL}),
  tagTypes: ['Task'],
  endpoints: builder => ({
    getTasks: builder.query<Task[], void>({
      query: () => '/tasks',
      providesTags: ['Task'],
    }),
    createTask: builder.mutation<Task, Partial<Task>>({
      query: body => ({
        url: '/tasks',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Task'],
      async onQueryStarted(id, {dispatch, queryFulfilled}) {
        try {
          const res = await queryFulfilled;
          dispatch(setTasks(res.data));
        } catch (resError) {
          console.log('Error', resError);
        }
      },
    }),
    updateTask: builder.mutation<Task, {id: string; body: Partial<Task>}>({
      query: ({id, body}) => ({
        url: `/tasks/${id}`,
        method: 'PUT',
        body,
      }),
    }),
    deleteTask: builder.mutation<Task, string>({
      query: id => ({
        url: `/tasks/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {reducer, middleware, reducerPath, endpoints} = taskApi;
export const {
  useGetTasksQuery,
  useCreateTaskMutation,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} = taskApi;
