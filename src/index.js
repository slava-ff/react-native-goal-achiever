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
        <Stack.Screen
          name="Goal"
          component={Goal}
          options={{
            title: 'Goal',
            // headerLeft: props => (
            //   <HeaderBackButton
            //     {...props}
            //     onPress={() => {
            //       console.log('===>>: App -> props', props);
            //       // Do something
            //     }}
            //   />
            // ),

            // headerRight: () => (
            //   <Button
            //     onPress={val1 => console.log('val1:', val1)}
            //     title="Del"
            //     color="gray"
            //     // eslint-disable-next-line react-native/no-inline-styles
            //     style={{padding: 10}}
            //   />
            // ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
