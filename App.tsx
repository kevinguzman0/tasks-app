import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainNavigator from './src/navigation/MainNavigator';
import {Provider as ReduxProvider} from 'react-redux';
import store, {persistor} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';

function App(): React.JSX.Element {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </PersistGate>
    </ReduxProvider>
  );
}

export default App;
