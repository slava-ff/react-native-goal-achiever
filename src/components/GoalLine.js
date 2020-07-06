/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import getDateNowDDMMYYY from '../helpers/date.helper';
import {RotationGestureHandler} from 'react-native-gesture-handler';

const GoalLine = ({dbGoal, navigation}) => {
  const handleOnPressButton = () => {
    console.log('===>>: Press Button');
    console.log('===>>: handleOnPressButton -> navigation', navigation);
    navigation.navigate('Goal');
  };

  const handleOnLongPressButton = () => {
    console.log('===>>: Long Press Button');
  };

  const imgSrc1 = '../assets/iconsPNG/cat_1.png';
  // const imgSrc1 = `../assets/iconsPNG/${dbGoal.logo}`;
  // console.log('===>>: GoalLine -> imgSrc1', imgSrc1);

  return (
    // <ScrollView>
    <TouchableOpacity
      onPress={handleOnPressButton}
      onLongPress={handleOnLongPressButton}>
      <View style={styles.goalLineWrapper}>
        <View style={{...styles.logoAndGoalWrapper, borderColor: dbGoal.color}}>
          <View style={{...styles.logoWrapper, backgroundColor: dbGoal.color}}>
            <Image source={require(imgSrc1)} style={styles.logo} />
          </View>
          {/* <TextInput
        style={{
          height: 35,
          borderColor: 'gray',
          borderWidth: 1,
          flex: 6,
          marginLeft: 10,
          padding: '2%',
        }}
        defaultValue="You can type in me"
      /> */}
          <Text style={styles.goalText}>{dbGoal.goalName}</Text>
        </View>
        <Text style={styles.date}>{getDateNowDDMMYYY()}</Text>
      </View>
    </TouchableOpacity>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  goalLineWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: '2%',
  },
  logoAndGoalWrapper: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    flex: 7,
  },
  logoWrapper: {
    flex: 1,
    backgroundColor: 'gray',
    borderRadius: 50,
    height: '100%',
    padding: '4%',
    width: '100%',
  },
  logo: {
    height: '150%',
    width: '150%',
    position: 'relative',
    left: '-25%',
    top: '-25%',
  },
  goalText: {
    marginLeft: '5%',
    flex: 6,
    color: 'black',
    padding: '4%',
    fontSize: 24,
  },
  date: {
    marginLeft: 10,
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 15,
  },
});

export default GoalLine;
