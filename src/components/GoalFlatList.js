import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import GoalLine from './GoalLine';

export default function App({goalsTemp, navigation}) {
  const goalsTempArr = Object.values(goalsTemp);

  return (
    <View style={styles.container}>
      <FlatList
        data={goalsTempArr}
        keyExtractor={item => item._id}
        renderItem={({item}) => (
          <GoalLine goalUnit={item} navigation={navigation} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
