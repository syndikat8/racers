import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';

const Driver = ({driver, navigation}) => {
  const onOpenDriverInfo = () => {
    navigation.navigate('DriverInfo', {driverId: driver.driverId});
  };

  return (
    <View style={styles.driver}>
      <View style={styles.container}>
        <TouchableOpacity onPress={onOpenDriverInfo}>
          <View style={styles.wrap}>
            <Text style={styles.title}>{driver.givenName}</Text>
            <Text>{driver.familyName}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.wrap}>
          <Text>{driver.dateOfBirth}</Text>
        </View>
      </View>
    </View>
  );
};

export default Driver;
