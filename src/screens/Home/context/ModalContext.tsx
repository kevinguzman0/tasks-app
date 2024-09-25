// src/context/ModalContext.tsx
import React, {createContext, useRef, useContext} from 'react';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {Task} from '@src/types/task.type';

type ModalContextType = {
  bottomSheetModalRef: React.RefObject<BottomSheetModal>;
  edit: boolean;
  editHandle: (edit: boolean) => void;
  editTask: Task | null;
  editTaskHandle: (task: Task | null) => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [edit, setEdit] = React.useState<boolean>(false);
  const [editTask, setEditTask] = React.useState<Task | null>(null);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const editHandle = (editItem: boolean) => {
    setEdit(editItem);
  };

  const editTaskHandle = (task: Task | null) => {
    setEditTask(task);
  };

  return (
    <ModalContext.Provider
      value={{bottomSheetModalRef, edit, editHandle, editTask, editTaskHandle}}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
