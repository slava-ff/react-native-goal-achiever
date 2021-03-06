/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import IconColorSelector from './IconColorSelector';
import MyImage from '../components/MyImage';

const Title = ({goalUnitStr, handleGoalChange}) => {
  const goalUnit = JSON.parse(goalUnitStr);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const myInput = useRef();

  const handleOnSetIcon = iconName => {
    goalUnit.logo = iconName;

    if (goalUnit.color === '#f2f2f2') {
      goalUnit.color = 'darkgrey';
    }

    handleGoalChange(goalUnit);
  };

  const handleOnSetColor = colorName => {
    goalUnit.color = colorName;

    handleGoalChange(goalUnit);
  };

  const handleOnSubmitText = text => {
    let finalText;

    if (text) {
      finalText = text.trim();
    } else {
      finalText = text;
    }

    goalUnit.goalName = finalText;

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
      <IconColorSelector
        isVisible={isModalVisible}
        goalUnit={goalUnit}
        setIsModalVisible={setIsModalVisible}
        handleOnSetIcon={handleOnSetIcon}
        handleOnSetColor={handleOnSetColor}
      />
      <TouchableWithoutFeedback
        onPress={() => {
          setIsModalVisible(!isModalVisible);
        }}>
        <View
          style={{
            ...styles.logoWrapper,
            backgroundColor: goalUnit.color,
            borderWidth: goalUnit.color === '#f2f2f2' && !goalUnit.logo ? 1 : 0,
          }}>
          <MyImage imgName={goalUnit.logo} style={styles.logo} />
        </View>
      </TouchableWithoutFeedback>
      <TextInput
        style={{
          ...styles.goalName,
          borderColor:
            goalUnit.color === '#f2f2f2' ? 'darkgrey' : goalUnit.color,
        }}
        defaultValue={goalUnit.goalName}
        placeholder={'Name...'}
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
    borderRadius: 50,
    borderStyle: 'dashed',
    borderColor: 'darkgrey',
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
