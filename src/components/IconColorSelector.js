/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
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
  const [activeTab, setActiveTab] = useState('logo');

  const ImageSelector = ({imgName}) => {
    const ImageContent = () => (
      <View
        style={{
          ...styles.logoWrapper,
          backgroundColor: goalUnit.color || 'gray',
          ...(goalUnit.logo === imgName && {
            borderWidth: 1,
            borderColor: 'gray',
            elevation: 5,
          }),
        }}>
        <MyImage imgName={imgName} style={styles.logo} />
      </View>
    );

    return (
      <View style={{margin: 6}}>
        {goalUnit.logo !== imgName ? (
          <TouchableOpacity
            onPress={() => {
              handleOnSetIcon(imgName);
            }}>
            <ImageContent />
          </TouchableOpacity>
        ) : (
          <ImageContent />
        )}
      </View>
    );
  };

  const ColorSelector = ({colorName}) => {
    const ColorContent = () => (
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
          ...(goalUnit.color === colorName && {
            borderWidth: 1,
            borderColor: 'gray',
            elevation: 5,
          }),
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
    );

    return (
      <View style={{margin: 6}}>
        {goalUnit.color !== colorName ? (
          <TouchableOpacity
            onPress={() => {
              handleOnSetColor(colorName);
            }}>
            <ColorContent />
          </TouchableOpacity>
        ) : (
          <ColorContent />
        )}
      </View>
    );
  };

  return (
    <View style={styles.centeredView}>
      <Modal animationType="fade" transparent={true} visible={isVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.tabsWrap}>
              <TouchableHighlight
                style={{
                  ...styles.logoTab,
                  backgroundColor: activeTab === 'logo' ? '#1a75bd' : '#2196F3',
                }}
                onPress={() => {
                  setActiveTab('logo');
                }}>
                <Text style={styles.textStyle}>Logo</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={{
                  ...styles.colorTab,
                  backgroundColor:
                    activeTab === 'color' ? '#1a75bd' : '#2196F3',
                }}
                onPress={() => {
                  setActiveTab('color');
                }}>
                <Text style={styles.textStyle}>Color</Text>
              </TouchableHighlight>
            </View>

            <ScrollView
              style={styles.scroll}
              contentContainerStyle={styles.scrollContent}
              showsVerticalScrollIndicator={false}>
              {activeTab === 'logo' &&
                iconNames.map(name => (
                  <ImageSelector imgName={name} key={name} />
                ))}
              {activeTab === 'color' &&
                colorNames.map(name => (
                  <ColorSelector colorName={name} key={name} />
                ))}
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
    borderTopStartRadius: 20,
  },
  colorTab: {
    flexGrow: 1,
    padding: 10,
    borderTopEndRadius: 20,
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
    justifyContent: 'center',
    alignItems: 'center',
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
