import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HaderTable = ({navigation}) => {
  const titles = [{title: 'Name'}, {title: 'DOB'}];

  const onClick = () => {
    navigation.navigate('Schedule');
  };

  return (
    <View style={styles.container}>
      {titles.map((el, index) => (
        <Text key={index} style={styles.title}>
          {el.title}
        </Text>
      ))}
      <TouchableOpacity onPress={onClick}>
        <Text style={styles.schedule}>Schedule</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HaderTable;
