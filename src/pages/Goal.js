import React, {useState, useEffect, useLayoutEffect, useCallback} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Alert,
  BackHandler,
  Button,
} from 'react-native';
import {HeaderBackButton} from '@react-navigation/stack';

import Title from '../components/Title';
import WhatDescription from '../components/WhatDescription';
import WhyDescription from '../components/WhyDescription';
import NeedsDescription from '../components/NeedsDescription';
import ActionsDescription from '../components/ActionsDescription';
import DatePicker from '../components/DatePicker';

import DB from '../helpers/db.helper';

const Goal = ({route, navigation}) => {
  const defaultGoal = JSON.stringify(route.params.goalUnit);
  const [goalUnit, setGoalUnit] = useState(route.params.goalUnit);
  const [isAddedNeed, setIsAddedNeed] = useState(false);
  const [isAddedAction, setIsAddedAction] = useState(false);

  const backTrigger = useCallback(() => {
    const saveGoal = async () => {
      if (goalUnit.goalName) {
        await DB.saveGoal(goalUnit);

        navigation.goBack();
      } else {
        Alert.alert('No name defined', 'Set name to save the goal!');
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

    return backAction();
  }, [defaultGoal, goalUnit, navigation]);

  useLayoutEffect(() => {
    const deleteAction = goal => {
      Alert.alert('Delete', 'Are you sure you want to delete this goal?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: async () => {
            goal._id && (await DB.delete(goal));
            navigation.goBack();
          },
          style: 'destructive',
        },
      ]);
    };

    navigation.setOptions({
      headerLeft: () => <HeaderBackButton onPress={() => backTrigger()} />,
      headerRight: () => (
        <Button
          onPress={() => deleteAction(goalUnit)}
          title="Del"
          style={styles.deleteBtn}
        />
      ),
    });
  }, [backTrigger, defaultGoal, goalUnit, navigation]);

  const handleGoalChange = changedGoal => {
    setGoalUnit(changedGoal);
    setIsAddedNeed(false);
    setIsAddedAction(false);
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backTrigger,
    );
    return () => backHandler.remove();
  }, [backTrigger, defaultGoal, goalUnit, navigation]);

  return (
    <View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.goalMainWrapper}>
        <Title
          goalUnitStr={JSON.stringify(goalUnit)}
          handleGoalChange={handleGoalChange}
        />
        <WhatDescription
          goalUnit={goalUnit}
          handleGoalChange={handleGoalChange}
        />
        <WhyDescription
          goalUnit={goalUnit}
          handleGoalChange={handleGoalChange}
        />
        <NeedsDescription
          goalUnitStr={JSON.stringify(goalUnit)}
          handleGoalChange={handleGoalChange}
          isAddedNeed={isAddedNeed}
          setIsAddedNeed={setIsAddedNeed}
        />
        <ActionsDescription
          goalUnitStr={JSON.stringify(goalUnit)}
          handleGoalChange={handleGoalChange}
          isAddedAction={isAddedAction}
          setIsAddedAction={setIsAddedAction}
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
  deleteBtn: {position: 'absolute', right: 100},
});

export default Goal;
