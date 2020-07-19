import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView, View, Alert, BackHandler} from 'react-native';

import Title from '../components/Title';
import WhatDescription from '../components/WhatDescription';
import WhyDescription from '../components/WhyDescription';
import NeedsDescription from '../components/NeedsDescription';
import ActionsDescription from '../components/ActionsDescription';
import DatePicker from '../components/DatePicker';

import DB from '../helpers/db.helper';

const Goal = ({route, navigation}) => {
  const defaultGoal = JSON.stringify(route.params.goalUnit);
  console.log('===>>: Goal -> defaultGoal', defaultGoal);
  const [goalUnit, setGoalUnit] = useState(route.params.goalUnit);

  const handleGoalChange = changedGoal => {
    // const newGoal = {...changedGoal};
    setGoalUnit(changedGoal);
  };

  useEffect(() => {
    const saveGoal = async () => {
      if (goalUnit.goalName) {
        await DB.saveGoal(goalUnit);

        navigation.goBack();
      } else {
        Alert.alert(
          'No name defined',
          'Fill the "Name" field to save the goal!',
        );
      }
    };

    const backAction = () => {
      if (defaultGoal !== JSON.stringify(goalUnit)) {
        Alert.alert(
          'Unsaved changes',
          'Do you want to save changes before exit?',
          [
            {
              text: 'Cancel',
              onPress: () => null,
              style: 'cancel',
            },
            {
              text: 'Discard',
              onPress: () => navigation.goBack(),
              style: 'destructive',
            },
            {text: 'YES', onPress: saveGoal},
          ],
        );
      } else {
        navigation.goBack();
      }
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [defaultGoal, goalUnit, navigation]);

  return (
    <View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.goalMainWrapper}>
        <Title goalUnit={goalUnit} handleGoalChange={handleGoalChange} />
        <WhatDescription
          goalUnit={goalUnit}
          handleGoalChange={handleGoalChange}
        />
        <WhyDescription
          goalUnit={goalUnit}
          handleGoalChange={handleGoalChange}
        />
        <NeedsDescription
          goalUnit={goalUnit}
          handleGoalChange={handleGoalChange}
        />
        <ActionsDescription
          goalUnit={goalUnit}
          handleGoalChange={handleGoalChange}
        />
        <DatePicker goalUnit={goalUnit} handleGoalChange={handleGoalChange} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  goalMainWrapper: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  buttons: {position: 'absolute', bottom: 10},
});

export default Goal;
