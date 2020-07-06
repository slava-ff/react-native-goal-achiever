import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {Colors} from 'react-native/Libraries/NewAppScreen';

// import GoalLine from '../components/GoalLine';
import GoalFlatList from '../components/GoalFlatList';
import goalsTemp from '../helpers/data.example';

const TopLevelGoals = ({navigation}) => {
  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      {/* <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        />
        <GoalLine />
        <GoalLine />
        <GoalLine />
        <GoalLine />
        <GoalLine />
      </SafeAreaView> */}
      <GoalFlatList goalsTemp={goalsTemp} navigation={navigation} />
    </>
  );
};

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
// });

export default TopLevelGoals;
