import React, {useMemo} from 'react';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {useModal} from '@src/screens/Home/context/ModalContext';

export default function ButtonSheetModal({
  children,
}: {
  children: React.ReactNode;
}) {
  const {bottomSheetModalRef} = useModal();
  const snapPoints = useMemo(() => ['55%', '55%'], []);

  // const handleSheetChanges = useCallback((index: number) => {
  //   console.log('handleSheetChanges', index);
  // }, []);

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        // onChange={handleSheetChanges}
      >
        {children}
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}
