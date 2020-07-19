import React, {useRef, useEffect} from 'react';
import {StyleSheet, View, Text, TextInput, Keyboard} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const WhyDescription = ({goalUnit, handleGoalChange}) => {
  const myInput = useRef();

  const handleOnSubmitText = text => {
    goalUnit.whyDescription = text;

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
      <Text style={styles.header}>2. Why do I want it?</Text>
      <TextInput
        multiline={true}
        placeholder={'Type here...'}
        blurOnSubmit={true}
        style={styles.input}
        defaultValue={goalUnit.whyDescription}
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
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginTop: 40,
    display: 'flex',
  },
  header: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    position: 'relative',
    top: -13,
    left: 20,
    backgroundColor: Colors.lighter,
  },
  input: {
    paddingHorizontal: 12,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: -15,
  },
});

export default WhyDescription;
