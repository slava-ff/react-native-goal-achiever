/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  FlatList,
  StyleSheet,
} from 'react-native';

// import getDateNowDDMMYYY from '../helpers/date.helper';
import GoalLine from './GoalLine';

export default function App({goalsTemp, navigation}) {
  const goalsTempArr = Object.values(goalsTemp);

  return (
    <View style={styles.container}>
      <FlatList
        data={goalsTempArr}
        renderItem={({item}) => (
          <GoalLine dbGoal={item} navigation={navigation} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
