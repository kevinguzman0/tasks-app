import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainNavigator from '@navigation/MainNavigator';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from '@store/index';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import {ModalProvider} from '@src/screens/Home/context/ModalContext';
import {ToastProvider} from 'react-native-toast-notifications';

if (__DEV__) {
  require('./ReactotronConfig');
}

function App(): React.JSX.Element {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={styles.container}>
          <ToastProvider>
            <NavigationContainer>
              <ModalProvider>
                <MainNavigator />
              </ModalProvider>
            </NavigationContainer>
          </ToastProvider>
        </GestureHandlerRootView>
      </PersistGate>
    </ReduxProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
