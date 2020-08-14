import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

const HaderSchedule = () => {
  const titles = [
    {title: 'Season'},
    {title: 'Round'},
    {title: 'Race Name'},
    {title: 'Date'},
    {title: 'Circuit'},
    {title: 'Locality'},
    {title: 'Information'},
  ];

  return (
    <View style={styles.container}>
      {titles.map((el, index) => (
        <Text key={index} style={styles.title}>
          {el.title}
        </Text>
      ))}
    </View>
  );
};

export default HaderSchedule;
