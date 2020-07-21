import React, {useRef, useEffect} from 'react';
import {StyleSheet, View, Image, TextInput, Keyboard} from 'react-native';

import MyImage from '../components/MyImage';
const imgSrc1 = '../assets/iconsPNG/cat_1.png';

const Title = ({goalUnit, handleGoalChange}) => {
  const myInput = useRef();

  const handleOnSubmitText = text => {
    goalUnit.goalName = text;

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
    <View style={{...styles.logoAndGoalWrapper, borderColor: goalUnit.color}}>
      <View style={{...styles.logoWrapper, backgroundColor: goalUnit.color}}>
        <MyImage imgName={goalUnit.logo} style={styles.logo} />
      </View>
      <TextInput
        style={styles.goalName}
        defaultValue={goalUnit.goalName}
        placeholder={'Type here...'}
        blurOnSubmit={true}
        onSubmitEditing={event =>
          handleOnSubmitText(event.nativeEvent.TextInput)
        }
        onEndEditing={event => handleOnSubmitText(event.nativeEvent.text)}
        ref={myInput}
      />
      <View style={styles.freeSpace} />
    </View>
  );
};

const styles = StyleSheet.create({
  logoAndGoalWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flex: 7,
    marginTop: 10,
  },
  freeSpace: {
    flex: 1,
  },
  goalName: {
    height: '80%',
    borderBottomWidth: 1,
    flex: 6,
    marginLeft: 10,
    padding: '2%',
    fontSize: 24,
  },
  logoWrapper: {
    backgroundColor: 'gray',
    borderRadius: 50,
    height: 70,
    padding: '4%',
    width: 70,
  },
  logo: {
    height: '150%',
    width: '150%',
    position: 'relative',
    left: '-25%',
    top: '-25%',
  },
});

export default Title;
