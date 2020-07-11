import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

// import GoalLine from '../components/GoalLine';
import GoalFlatList from '../components/GoalFlatList';
import AddButton from '../components/AddButton';
import DB from '../helpers/db.helper';
import goalsTemp from '../helpers/data.example';

const TopLevelGoals = ({navigation}) => {
  const goals = DB.getAllTopLevel();

  return (
    <>
      {/* <View style={{position: 'relative'}}> */}
      {/* <StatusBar barStyle="dark-content" /> */}
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View
          style={{
            borderColor: 'black',
            margin: 30,
            borderWidth: 2,
            height: 140,
          }}>
          <Text>Aasasdasdasdsd</Text>
        </View>
        <View
          style={{
            borderColor: 'black',
            margin: 30,
            borderWidth: 2,
            height: 140,
          }}>
          <Text>Aasasdasdasdsd</Text>
        </View>
        <View
          style={{
            borderColor: 'black',
            margin: 30,
            borderWidth: 2,
            height: 140,
          }}>
          <Text>Aasasdasdasdsd</Text>
        </View>
        <View
          style={{
            borderColor: 'black',
            margin: 30,
            borderWidth: 2,
            height: 140,
          }}>
          <Text>Aasasdasdasdsd</Text>
        </View>
      </ScrollView> */}
      {goals && (
        <GoalFlatList
          goalsTemp={goals}
          navigation={navigation}
          style={styles.flatList}
        />
      )}
      <AddButton style={styles.btn} navigation={navigation} />
      {/* </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  // scrollView: {
  //   backgroundColor: Colors.lighter,
  // },
  flatList: {},
  btn: {},
});

export default TopLevelGoals;
