/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Text, TextInput, CheckBox} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const ActionsDescription = ({goalUnit}) => {
  const handleOnBlur = () => {
    console.log('===>>: ActionsDescription -> handleOnBlur');
  };

  const Actions = () => {
    console.log(
      '===>>: Actions -> goalUnit.actionsDescription',
      goalUnit.actionsDescription,
    );

    return goalUnit.actionsDescription.map(action => (
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={action.isDone}
          onValueChange={console.log('checkbox')}
          style={styles.checkbox}
        />
        <Text
          style={{
            // ...styles.label,
            textDecorationLine: action.isDone ? 'line-through' : 'none',
          }}>
          {action.actionDescription}
        </Text>
      </View>
    ));
  };

  return (
    <View style={{...styles.wrapper, borderColor: goalUnit.color}}>
      <Text style={styles.header}>4. What actions to take to achieve it?</Text>
      <Actions />
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
    marginLeft: 6,
  },
  checkbox: {
    position: 'relative',
    top: -6,
  },
  input: {
    paddingHorizontal: 12,
    fontSize: 18,
    marginTop: -11,
  },
});

export default ActionsDescription;
