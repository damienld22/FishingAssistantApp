import React from 'react';
import { SafeAreaView, View, StatusBar, Text } from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView>
        <View>
          <Text>Hello world</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
