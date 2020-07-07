import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const WhyDescription = ({goalUnit}) => {
  const handleOnBlur = () => {
    console.log('===>>: WhyDescription -> handleOnBlur');
  };

  return (
    <View style={{...styles.wrapper, borderColor: goalUnit.color}}>
      <Text style={styles.header}>Why do I want it?</Text>
      <TextInput
        multiline={true}
        onBlur={handleOnBlur}
        style={styles.input}
        value={goalUnit.whyDescription}
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
    width: 123,
  },
  input: {
    paddingHorizontal: 12,
    fontSize: 18,
    marginTop: -11,
  },
});

export default WhyDescription;
