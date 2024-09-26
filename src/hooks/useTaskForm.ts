import {Task} from '@src/types/task.type';
import {useCallback, useState} from 'react';

export const useTaskForm = (edit: boolean, editTask: Task | null) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const initializeForm = useCallback(() => {
    if (edit) {
      setTitle(editTask!.title);
      setDescription(editTask!.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [edit, editTask]);

  return {title, setTitle, description, setDescription, initializeForm};
};
