import React from 'react';
import {View, Text, Linking} from 'react-native';
import styles from './style';

const DriverInfo = ({driver, driverId}) => {
  return (
    <View style={styles.container}>
      {driver.map((el) => {
        return (
          <View key={driverId}>
            <View style={styles.wrap}>
              <Text style={styles.title}>Name:</Text>
              <Text>{el.givenName}</Text>
            </View>
            <View style={styles.wrap}>
              <Text style={styles.title}>Surname:</Text>
              <Text>{el.familyName}</Text>
            </View>
            <View style={styles.wrap}>
              <Text style={styles.title}>Date of Birth:</Text>
              <Text>{el.dateOfBirth}</Text>
            </View>
            <View style={styles.wrap}>
              <Text style={styles.title}>Nationality:</Text>
              <Text>{el.nationality}</Text>
            </View>
            <View style={styles.wrap}>
              <Text style={styles.title}>Biography:</Text>
              <Text
                onPress={() => Linking.openURL(`${el.url}`)}
                style={styles.url}>
                BIOGRAPHY
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default DriverInfo;
