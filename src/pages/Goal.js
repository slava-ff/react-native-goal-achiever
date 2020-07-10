import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
} from 'react-native';

import Title from '../components/Title';
import WhatDescription from '../components/WhatDescription';
import WhyDescription from '../components/WhyDescription';
import NeedsDescription from '../components/NeedsDescription';
import ActionsDescription from '../components/ActionsDescription';

const Goal = ({route, navigation}) => {
  const {goalUnit} = route.params;

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.goalMainWrapper}>
      <Title goalUnit={goalUnit} />
      <WhatDescription goalUnit={goalUnit} />
      <WhyDescription goalUnit={goalUnit} />
      <NeedsDescription goalUnit={goalUnit} />
      <ActionsDescription goalUnit={goalUnit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  goalMainWrapper: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 10,
    marginTop: '3%',
  },
});

export default Goal;
