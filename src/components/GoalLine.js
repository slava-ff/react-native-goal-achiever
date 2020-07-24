import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import MyImage from '../components/MyImage';
import getDateDDMMYYY from '../helpers/date.helper';

const GoalLine = ({goalUnit, navigation}) => {
  const handleOnPressButton = () => {
    navigation.navigate('Goal', {
      goalUnit: goalUnit,
    });
  };

  const handleOnLongPressButton = () => {
    console.log('===>>: Long Press Button');
  };

  return (
    <TouchableOpacity
      onPress={handleOnPressButton}
      onLongPress={handleOnLongPressButton}>
      <View style={styles.goalLineWrapper}>
        <View
          style={{...styles.logoAndGoalWrapper, borderColor: goalUnit.color}}>
          <View
            style={{...styles.logoWrapper, backgroundColor: goalUnit.color}}>
            <MyImage imgName={goalUnit.logo} style={styles.logo} />
          </View>
          <Text style={styles.goalText} numberOfLines={1}>
            {goalUnit.goalName}
          </Text>
        </View>
        <Text style={styles.date}>{getDateDDMMYYY(goalUnit.date)}</Text>
      </View>
    </TouchableOpacity>
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
    overflow: 'hidden',
  },
  logoWrapper: {
    backgroundColor: 'gray',
    borderRadius: 50,
    height: 60,
    padding: '4%',
    width: 60,
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
