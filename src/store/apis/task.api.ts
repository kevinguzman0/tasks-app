import {Task} from '@custom_types/task.type';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {APP_API_URL} from '../../../mocks/config';

export const taskApi = createApi({
  reducerPath: 'taskApi',
  baseQuery: fetchBaseQuery({baseUrl: APP_API_URL}),
  endpoints: builder => ({
    getTasks: builder.query<Task[], void>({
      query: () => '/tasks',
    }),
  }),
});

export const {reducer, middleware, reducerPath, endpoints} = taskApi;
export const {useGetTasksQuery} = taskApi;
