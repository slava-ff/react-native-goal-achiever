import React, {useRef, useEffect} from 'react';
import {StyleSheet, View, Text, TextInput, Keyboard} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const WhatDescription = ({goalUnit, handleGoalChange}) => {
  const myInput = useRef();

  const handleOnSubmitText = text => {
    let finalText;

    if (text) {
      finalText = text.trim();
    } else {
      finalText = text;
    }

    goalUnit.whatDescription = finalText;

    handleGoalChange(goalUnit);
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

  return (
    <View style={{...styles.wrapper, borderColor: goalUnit.color}}>
      <Text style={styles.header}>1. What is my main goal?</Text>
      <TextInput
        multiline={true}
        placeholder={'Type here...'}
        style={styles.input}
        defaultValue={goalUnit.whatDescription}
        onSubmitEditing={event =>
          handleOnSubmitText(event.nativeEvent.TextInput)
        }
        onEndEditing={event => handleOnSubmitText(event.nativeEvent.text)}
        ref={myInput}
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
    fontWeight: 'bold',
    backgroundColor: Colors.lighter,
  },
  input: {
    paddingHorizontal: 12,
    fontSize: 16,
    marginTop: -15,
  },
});

export default WhatDescription;
