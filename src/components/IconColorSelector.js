/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';

import iconNames from '../assets/iconNames';
import colorNames from '../helpers/color.helper';
import MyImage from '../components/MyImage';

const IconColorSelector = ({
  isVisible,
  setIsModalVisible,
  goalUnit,
  handleOnSetIcon,
  handleOnSetColor,
}) => {
  const [activeTab, setActiveTab] = useState('color');

  const ImageSelector = ({imgName}) => {
    return (
      <View style={{margin: 6}}>
        <TouchableOpacity
          onPress={() => {
            handleOnSetIcon(imgName);
          }}>
          <View
            style={{
              ...styles.logoWrapper,
              backgroundColor: goalUnit.color || 'gray',
            }}>
            <MyImage imgName={imgName} style={styles.logo} />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const ColorSelector = ({colorName}) => {
    return (
      <View style={{margin: 6}}>
        <TouchableOpacity
          onPress={() => {
            handleOnSetColor(colorName);
          }}>
          <View
            style={{
              ...styles.logoWrapper,
              backgroundColor: colorName,
              ...(!goalUnit.logo
                ? {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }
                : {}),
            }}>
            {!goalUnit.logo ? (
              <View
                style={{
                  backgroundColor: 'white',
                  width: 20,
                  height: 20,
                  borderRadius: 20,
                }}
              />
            ) : (
              <MyImage imgName={goalUnit.logo} style={styles.logo} />
            )}
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
            <View style={styles.tabsWrap}>
              <TouchableOpacity
                style={{
                  ...styles.colorTab,
                  backgroundColor: activeTab === 'color' ? 'blue' : '#2196F3',
                }}
                onPress={() => {
                  setActiveTab('color');
                }}>
                <Text style={styles.textStyle}>Color</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.logoTab,
                  backgroundColor: activeTab === 'logo' ? 'blue' : '#2196F3',
                }}
                onPress={() => {
                  setActiveTab('logo');
                }}>
                <Text style={styles.textStyle}>Logo</Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              style={styles.scroll}
              contentContainerStyle={styles.scrollContent}
              showsVerticalScrollIndicator={false}>
              {activeTab === 'logo' &&
                iconNames.map(name => <ImageSelector imgName={name} />)}
              {activeTab === 'color' &&
                colorNames.map(name => <ColorSelector colorName={name} />)}
            </ScrollView>

            <TouchableOpacity
              style={styles.openButton}
              onPress={() => {
                setIsModalVisible(!isVisible);
              }}>
              <Text style={styles.textStyle}>Ok</Text>
            </TouchableOpacity>
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
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tabsWrap: {
    width: '100%',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  logoTab: {
    flexGrow: 1,
    padding: 10,
    borderTopEndRadius: 20,
  },
  colorTab: {
    flexGrow: 1,
    padding: 10,
    borderTopStartRadius: 20,
  },
  openButton: {
    backgroundColor: '#2196F3',
    width: '100%',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    padding: 10,
    elevation: 2,
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

export default IconColorSelector;
