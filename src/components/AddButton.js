import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

import DB from '../helpers/db.helper';

const AddButton = ({navigation}) => {
  const newGoal = DB.getNewSchema();

  const handleOnPressButton = () => {
    navigation.navigate('Goal', {
      goalUnit: newGoal,
    });
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.round} onPress={handleOnPressButton}>
        <View style={styles.vertical} />
        <View style={styles.horizontal} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 2,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 30,
    right: 50,
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  round: {
    width: 80,
    height: 80,
    backgroundColor: '#00ADC1',
    borderRadius: 50,
  },
  vertical: {
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: 'white',
    height: 40,
    width: 10,
    borderRadius: 4,
    position: 'absolute',
    opacity: 1,
  },
  horizontal: {
    alignSelf: 'center',
    marginTop: 35,
    backgroundColor: 'white',
    height: 10,
    width: 40,
    borderRadius: 4,
    position: 'absolute',
    opacity: 1,
  },
});

export default AddButton;
