import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <View>
        <Text>Hello world</Text>
      </View>
    </NavigationContainer>
  );
}

export default App;
