import React from 'react';
import {StyleSheet, Button, View, SafeAreaView, Alert} from 'react-native';

const SaveCancelButtons = () => (
  <View style={styles.container}>
    <View style={styles.fixToText}>
      <Button
        title="Cancel"
        onPress={() => Alert.alert('Cancel button pressed')}
      />
      <Button title="Save" onPress={() => Alert.alert('Save button pressed')} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default SaveCancelButtons;
