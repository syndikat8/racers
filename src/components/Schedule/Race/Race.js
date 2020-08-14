import React from 'react';
import {View, Text, Linking} from 'react-native';
import styles from './style';

const Race = ({race}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{race.season}</Text>
      <Text style={styles.text}>{race.round}</Text>
      <Text style={styles.text}>{race.raceName}</Text>
      <Text style={styles.text}>{race.date}</Text>
      <Text style={styles.text}>{race.Circuit.circuitName}</Text>
      <Text style={styles.text}>{race.Circuit.Location.locality}</Text>
      <Text onPress={() => Linking.openURL(`${race.url}`)} style={styles.url}>
        Report
      </Text>
    </View>
  );
};

export default Race;
