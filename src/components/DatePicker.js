import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import getDateDDMMYYY from '../helpers/date.helper';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export default ({goalUnit, handleGoalChange}) => {
  const [date, setDate] = useState(
    goalUnit.date ? new Date(goalUnit.date) : new Date('2020-07-13'),
  );
  const [show, setShow] = useState(false);

  const dateText = getDateDDMMYYY(date);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios'); // why is it in documentation?
    setDate(currentDate);
    goalUnit.date = currentDate;
    handleGoalChange(goalUnit);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View style={{...styles.wrapper, borderColor: goalUnit.color}}>
      <Text style={styles.header}>5. When it should be achieved?</Text>
      <View>
        <TouchableOpacity style={styles.dateWrapper} onPress={showDatepicker}>
          <Image
            source={require('../assets/iconsPNG/icon-date.png')}
            style={styles.image}
          />
          <Text style={styles.date}>{dateText}</Text>
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          value={date}
          mode={'date'}
          display="calendar" // 'spinner'
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginTop: 40,
    marginBottom: 100,
    display: 'flex',
  },
  header: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    position: 'relative',
    top: -13,
    left: 20,
    fontWeight: 'bold',
    backgroundColor: Colors.lighter,
  },
  dateWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    width: 20,
    height: 20,
    top: 1,
  },
  date: {
    paddingHorizontal: 12,
    fontSize: 18,
    marginTop: 0,
    marginLeft: 2,
    marginBottom: 12,
    textAlign: 'center',
  },
});
