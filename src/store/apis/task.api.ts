import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Task} from '../../types/task.type';
import {APP_API_URL} from '../../../mocks/config';

export const taskApi = createApi({
  reducerPath: 'taskApi',
  baseQuery: fetchBaseQuery({baseUrl: APP_API_URL}),
  endpoints: builder => ({
    getTasks: builder.query<Task[], any>({
      query: () => '/tasks',
    }),
  }),
});

export const {reducer, middleware, reducerPath, endpoints} = taskApi;
export const {useGetTasksQuery} = taskApi;
