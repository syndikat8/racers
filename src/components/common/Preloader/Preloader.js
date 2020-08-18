import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './style';

const Preloader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#2F4F4F" />
    </View>
  );
};

export default Preloader;
