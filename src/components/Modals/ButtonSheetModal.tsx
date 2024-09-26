import React, {useEffect, useMemo, useState} from 'react';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {useModal} from '@src/screens/Home/context/ModalContext';
import {Keyboard} from 'react-native';

export default function ButtonSheetModal({
  children,
}: {
  children: React.ReactNode;
}) {
  const {bottomSheetModalRef} = useModal();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const bg = 'transparent';

  const snapPoints = useMemo(
    () => (isKeyboardVisible ? ['100%', '100%'] : ['55%', '55%']),
    [isKeyboardVisible],
  );

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        backgroundStyle={{backgroundColor: bg}}
        snapPoints={snapPoints}>
        {children}
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}
