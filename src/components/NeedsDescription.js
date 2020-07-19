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

const NeedsDescription = ({goalUnit, handleGoalChange}) => {
  const myInput = useRef();

  const handleOnSubmitText = (text, needIdToChange) => {
    const indexToChange = goalUnit.needsDescription.simpleNeeds.findIndex(
      need => need.needId === needIdToChange,
    );

    goalUnit.needsDescription.simpleNeeds[indexToChange].needText = text;
    handleGoalChange(goalUnit);
  };

  const handleDeleteItem = idToDelete => {
    // if leave only goalUnit - not live updating but onBack - sees changes
    const changedGoal = {...goalUnit};
    const indexToDelete = changedGoal.needsDescription.simpleNeeds.findIndex(
      need => need.needId === idToDelete,
    );

    changedGoal.needsDescription.simpleNeeds.splice(indexToDelete, 1);
    handleGoalChange(changedGoal);
  };

  const handleAddItem = () => {
    const changedGoal = {...goalUnit};
    const newId = guidGenerator();

    changedGoal.needsDescription.simpleNeeds.push({
      needId: newId,
      doHave: false,
      needText: '',
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

  const Needs = () => {
    return goalUnit.needsDescription.simpleNeeds.map(need => (
      <View key={need.needId} style={styles.checkboxContainer}>
        <CheckBox
          value={need.doHave}
          onValueChange={value => console.log('checkbox: ', value)}
          style={styles.checkbox}
        />
        <TextInput
          style={{
            ...styles.itemText,
            textDecorationLine: need.doHave ? 'line-through' : 'none',
          }}
          multiline={true}
          defaultValue={need.needText}
          placeholder={'Type here...'}
          blurOnSubmit={true}
          onSubmitEditing={event =>
            handleOnSubmitText(event.nativeEvent.text, need.needId)
          }
          onEndEditing={event =>
            handleOnSubmitText(event.nativeEvent.text, need.needId)
          }
          ref={myInput}
        />
        <TouchableWithoutFeedback
          nativeID={need.needId}
          onPress={() => handleDeleteItem(need.needId)}>
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
          <Text style={styles.addItemText}>New need</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={{...styles.wrapper, borderColor: goalUnit.color}}>
      <Text style={styles.header}>3. What do I need to achieve it?</Text>
      <Needs />
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
    color: 'gray',
    fontSize: 16,
    marginLeft: 11,
  },
});

export default NeedsDescription;
