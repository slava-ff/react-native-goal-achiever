/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Modal,
  ScrollView,
  FlatList,
} from 'react-native';

import iconNames from '../assets/iconNames';
import MyImage from '../components/MyImage';

const IconColorSelector = ({
  isVisible,
  setIsModalVisible,
  // goalUnit,
  handleOnSetIcon,
}) => {
  // const [chosenLogo, setChosenLogo] = useState(goalUnit.logo || '');
  console.log('isModalVisible-2');

  const ImageSelector = ({imgName}) => {
    console.log('isModalVisible-3');
    return (
      <View style={{margin: 6}}>
        <TouchableOpacity
          onPress={() => {
            // setChosenLogo(imgName);
            handleOnSetIcon(imgName);
          }}>
          <View
            style={{
              ...styles.logoWrapper,
              // backgroundColor: chosenLogo === imgName ? '#2196F3' : 'gray',
              backgroundColor: 'gray',
            }}>
            <MyImage imgName={imgName} style={styles.logo} />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.centeredView}>
      <Modal animationType="fade" transparent={true} visible={isVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView
              style={styles.scroll}
              contentContainerStyle={styles.scrollContent}
              showsVerticalScrollIndicator={false}>
              {iconNames.map(name => (
                <ImageSelector imgName={name} />
              ))}
            </ScrollView>
            <TouchableHighlight
              style={styles.openButton}
              onPress={() => {
                setIsModalVisible(!isVisible);
              }}>
              <Text style={styles.textStyle}>Ok</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 150,
    left: 20,
    width: '80%',
  },
  modalView: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    // paddingHorizontal: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // borderWidth: 1,
  },
  openButton: {
    // backgroundColor: '#F194FF',
    backgroundColor: '#2196F3',
    width: '100%',
    // borderRadius: 20,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    padding: 10,
    elevation: 2,
    // borderWidth: 1,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  scroll: {
    width: '100%',
    height: 400,
    paddingHorizontal: 20,
  },
  scrollContent: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  logoWrapper: {
    borderRadius: 50,
    height: 70,
    padding: '14%',
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

// const styles = StyleSheet.create({
//   modal: {
//     borderWidth: 1,
//     borderColor: 'black',
//     backgroundColor: 'red',
//     width: 10,
//     height: 10,
//     position: 'absolute',
//   },
//   logoWrapper: {
//     backgroundColor: 'gray',
//     borderRadius: 50,
//     height: 70,
//     padding: '4%',
//     width: 70,
//   },
//   logo: {
//     height: '150%',
//     width: '150%',
//     position: 'relative',
//     left: '-25%',
//     top: '-25%',
//   },
// });

export default IconColorSelector;
