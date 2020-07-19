/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import guidGenerator from '../helpers/guid.helper';

const ActionsDescription = ({goalUnit, handleGoalChange}) => {
  // console.log('===>>: ActionsDescription -> goalUnit', goalUnit);
  const myInput = useRef();

  const handleCheckboxToggle = (value, actionIdToChange) => {
    // const goal2 = {...goalUnit};

    // const indexToChange = goal2.actionsDescription.findIndex(
    //   action => action.actionId === actionIdToChange,
    // );

    // goal2.actionsDescription[indexToChange].isDone = value;
    // handleGoalChange(goal2);

    const indexToChange = goalUnit.actionsDescription.findIndex(
      action => action.actionId === actionIdToChange,
    );

    goalUnit.actionsDescription[indexToChange].isDone = value;
    handleGoalChange(goalUnit);
  };

  const handleOnSubmitText = (text, actionIdToChange) => {
    const indexToChange = goalUnit.actionsDescription.findIndex(
      action => action.actionId === actionIdToChange,
    );

    goalUnit.actionsDescription[indexToChange].actionText = text;
    handleGoalChange(goalUnit);
  };

  const handleDeleteItem = idToDelete => {
    // if leave only goalUnit - not live updating but onBack - sees changes
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

  const _keyboardDidHide = () => {
    myInput.current && myInput.current.blur();
  };

  useEffect(() => {
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    return () => {
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  const Actions = () => {
    return goalUnit.actionsDescription.map(action => (
      <View key={action.actionId} style={styles.checkboxContainer}>
        <CheckBox
          value={action.isDone}
          onValueChange={value => handleCheckboxToggle(value, action.actionId)}
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
          ref={myInput}
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
        <View style={styles.addItemWrapper}>
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
      <AddItem />
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
  },
  itemText: {
    paddingLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
    width: '80%',
    padding: 2,
  },
  delete: {
    fontSize: 23,
    color: 'gray',
    fontWeight: 'bold',
    marginLeft: 10,
    transform: [{rotate: '45deg'}],
  },
  addItemWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 5,
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
    color: 'gray',
    marginLeft: 11,
  },
});

export default ActionsDescription;
