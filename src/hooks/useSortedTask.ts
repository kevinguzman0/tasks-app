import {useMemo} from 'react';
import {useAppSelector} from './store.hook';
import {useTasks} from './useTask.hook';
import {selectTasks} from '@src/store/slices/task.reducer';

export const useSortedTasks = () => {
  const {tasks: apiTasks, isGetTasksLoading} = useTasks();
  const {tasks: storeTasks} = useAppSelector(selectTasks);
  const tasks = storeTasks || apiTasks;

  const sortedTasks = useMemo(() => {
    return tasks
      ?.slice()
      .sort((a, b) => Number(b.completed) - Number(a.completed));
  }, [tasks]);

  return {sortedTasks, isGetTasksLoading};
};
