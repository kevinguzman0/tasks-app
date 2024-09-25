// src/context/ModalContext.tsx
import React, {createContext, useRef, useContext} from 'react';
import {BottomSheetModal} from '@gorhom/bottom-sheet';

type ModalContextType = {
  bottomSheetModalRef: React.RefObject<BottomSheetModal>;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  return (
    <ModalContext.Provider value={{bottomSheetModalRef}}>
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
