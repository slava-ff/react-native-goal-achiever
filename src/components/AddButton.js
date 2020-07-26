import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

import DB from '../helpers/db.helper';

const AddButton = ({navigation}) => {
  const handleOnPressButton = () => {
    const goalSchema = DB.getNewSchema();

    navigation.navigate('Goal', {
      goalUnit: goalSchema,
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
    bottom: 40,
    right: 40,
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
