import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TopLevelGoals from './pages/TopLevelGoals';
import Goal from './pages/Goal';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TopLevelGoals">
        <Stack.Screen
          name="TopLevelGoals"
          options={{title: 'Top level goals'}}
          component={TopLevelGoals}
        />
        <Stack.Screen name="Goal" options={{title: 'Goal'}} component={Goal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
