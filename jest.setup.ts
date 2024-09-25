import '@testing-library/react-native/extend-expect';
import {jest} from '@jest/globals';

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));

jest.mock('redux-persist/es/constants', () => ({
  FLUSH: 'FLUSH',
  PAUSE: 'PAUSE',
  PERSIST: 'PERSIST',
  PURGE: 'PURGE',
  REGISTER: 'REGISTER',
  REHYDRATE: 'REHYDRATE',
}));

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...(typeof real === 'object' ? real : {}),
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});

jest.mock('@gorhom/bottom-sheet', () => {
  const BottomSheet = ({children}: {children: React.ReactNode}) => children;
  const BottomSheetBackdrop = () => null;
  const BottomSheetModal = ({children}: {children: React.ReactNode}) =>
    children;
  const BottomSheetModalProvider = ({children}: {children: React.ReactNode}) =>
    children;

  return {
    __esModule: true,
    BottomSheet,
    BottomSheetBackdrop,
    BottomSheetModal,
    BottomSheetModalProvider,
  };
});

jest.mock('react-native-gesture-handler/ReanimatedSwipeable', () => {
  const Swipeable = ({children}: {children: React.ReactNode}) => children;
  const SwipeableMethods = {
    openLeft: jest.fn(),
    openRight: jest.fn(),
    close: jest.fn(),
  };

  return {
    __esModule: true,
    Swipeable,
    SwipeableMethods,
  };
});
jest.mock('react-native-gesture-handler', () => {
  const GestureHandlerRootView = ({children}: {children: React.ReactNode}) =>
    children;

  // const RectButton = ({children, ...props}) => (
  //   <button {...props}>{children}</button>
  // );
  const State = {
    BEGAN: 'BEGAN',
    FAILED: 'FAILED',
    ACTIVE: 'ACTIVE',
    END: 'END',
  };

  return {
    __esModule: true,
    GestureHandlerRootView,
    // RectButton,
    State,
  };
});

jest.mock('@react-navigation/native-stack', () => {
  const _actualNav: any = jest.requireActual('@react-navigation/native');
  const createNativeStackNavigator = jest.fn();

  const useNavigation = jest.fn(() => ({
    navigate: jest.fn(),
    dispatch: jest.fn(),
    goBack: jest.fn(),
    pop: jest.fn(),
    canGoBack: jest.fn(),
    setOptions: jest.fn(),
    reset: jest.fn(),
    push: jest.fn(),
    replace: jest.fn(),
    addListener: jest.fn(),
    isFocused: jest.fn().mockReturnValue(true),
    setParams: jest.fn(),
    getState: jest.fn(),
    popToTop: jest.fn(),
  }));

  return {
    __esModule: true,
    ..._actualNav,
    createNativeStackNavigator,
    useIsFocused: jest.fn(),
    useFocusEffect: jest.fn(),
    useNavigation,
  };
});

jest.mock('reactotron-react-native', () => {
  return {
    configure: jest.fn().mockReturnValue({
      useReactNative: jest.fn().mockReturnValue({
        connect: jest.fn(),
      }),
    }),
    use: jest.fn(),
    connect: jest.fn(),
    clear: jest.fn(),
  };
});
