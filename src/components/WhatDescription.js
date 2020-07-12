import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const WhatDescription = ({goalUnit, handleGoalChange}) => {
  const handleOnSubmitText = text => {
    goalUnit.whatDescription = text;

    handleGoalChange(goalUnit);
  };

  return (
    <View style={{...styles.wrapper, borderColor: goalUnit.color}}>
      <Text style={styles.header}>1. What is my main goal?</Text>
      <TextInput
        multiline={true}
        placeholder={'Type here...'}
        blurOnSubmit={true}
        style={styles.input}
        defaultValue={goalUnit.whatDescription}
        onSubmitEditing={event =>
          handleOnSubmitText(event.nativeEvent.TextInput)
        }
        onEndEditing={event => handleOnSubmitText(event.nativeEvent.text)}
      />
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
  input: {
    paddingHorizontal: 12,
    fontSize: 18,
    marginTop: -11,
  },
});

export default WhatDescription;
