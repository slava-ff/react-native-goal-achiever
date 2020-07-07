import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const WhatDescription = ({goalUnit}) => {
  const handleOnBlur = () => {
    console.log('===>>: WhatDescription -> handleOnBlur');
  };

  return (
    <View style={{...styles.wrapper, borderColor: goalUnit.color}}>
      <Text style={styles.header}>What is my main goal?</Text>
      <TextInput
        multiline={true}
        onBlur={handleOnBlur}
        style={styles.input}
        value={goalUnit.whatDescription}
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
  },
  header: {
    paddingHorizontal: 8,
    position: 'relative',
    top: -13,
    left: 20,
    backgroundColor: Colors.lighter,
    width: 158,
  },
  input: {
    paddingHorizontal: 12,
    fontSize: 18,
    marginTop: -11,
  },
});

export default WhatDescription;
