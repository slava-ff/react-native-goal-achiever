/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import guidGenerator from '../helpers/guid.helper';

const ActionsDescription = ({goalUnit, handleGoalChange}) => {
  const handleOnSubmitText = (text, actionIdToChange) => {
    const changedGoal = {...goalUnit};

    const indexToChange = changedGoal.actionsDescription.findIndex(
      action => action.actionId === actionIdToChange,
    );

    changedGoal.actionsDescription[indexToChange].actionText = text;
    handleGoalChange(changedGoal);
  };

  const handleDeleteItem = idToDelete => {
    const changedGoal = {...goalUnit};
    const indexToDelete = changedGoal.actionsDescription.findIndex(
      action => action.actionId === idToDelete,
    );

    changedGoal.actionsDescription.splice(indexToDelete, 1);
    handleGoalChange(changedGoal);
  };

  const handleAddItem = () => {
    const changedGoal = {...goalUnit};
    const newId = guidGenerator();

    changedGoal.actionsDescription.push({
      actionId: newId,
      isDone: false,
      actionText: '',
    });
    handleGoalChange(changedGoal);
  };

  const Actions = () => {
    return goalUnit.actionsDescription.map(action => (
      <View key={action.actionId} style={styles.checkboxContainer}>
        <CheckBox
          value={action.isDone}
          onValueChange={console.log('checkbox')}
          style={styles.checkbox}
        />
        <TextInput
          style={{
            ...styles.itemText,
            textDecorationLine: action.isDone ? 'line-through' : 'none',
          }}
          multiline={true}
          defaultValue={action.actionText}
          placeholder={'Type here...'}
          blurOnSubmit={true}
          onSubmitEditing={event =>
            handleOnSubmitText(event.nativeEvent.text, action.actionId)
          }
          onEndEditing={event =>
            handleOnSubmitText(event.nativeEvent.text, action.actionId)
          }
        />
        <TouchableWithoutFeedback
          nativeID={action.actionId}
          onPress={() => handleDeleteItem(action.actionId)}>
          <View>
            <Text style={styles.delete}>+</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    ));
  };

  const AddItem = () => {
    return (
      <TouchableWithoutFeedback onPress={handleAddItem}>
        <View style={styles.checkboxContainer}>
          <Text style={styles.plus}>+</Text>
          <Text style={styles.addItemText}>New action</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={{...styles.wrapper, borderColor: goalUnit.color}}>
      <Text style={styles.header}>4. What actions to take to achieve it?</Text>
      <Actions />
      <AddItem whatAdd={'action'} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginTop: 40,
    minHeight: 50,
  },
  header: {
    paddingHorizontal: 8,
    alignSelf: 'flex-start',
    position: 'relative',
    top: -13,
    left: 20,
    backgroundColor: Colors.lighter,
  },
  checkboxContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 10,
  },
  checkbox: {
    position: 'relative',
    // top: 8,
  },
  itemText: {
    paddingLeft: 8,
    fontSize: 18,
    width: '80%',
    // borderWidth: 1,
    padding: 2,
  },
  delete: {
    // borderWidth: 1,
    fontSize: 23,
    color: 'gray',
    fontWeight: 'bold',
    marginLeft: 10,
    transform: [{rotate: '45deg'}],
  },
  plus: {
    position: 'relative',
    fontSize: 22,
    top: -5,
    color: 'gray',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  addItemText: {
    paddingHorizontal: 8,
    fontSize: 16,
    marginLeft: 11,
  },
});

export default ActionsDescription;
