import 'react-native-gesture-handler';
import React from 'react';
import {Button} from 'react-native';
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
        <Stack.Screen
          name="Goal"
          options={{
            title: 'Goal',
            headerRight: () => (
              <Button
                onPress={() => alert('This is a Delete button!')}
                title="Del"
                color="gray"
                // eslint-disable-next-line react-native/no-inline-styles
                style={{padding: 10}}
              />
            ),
          }}
          component={Goal}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
