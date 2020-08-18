import React from 'react';
import {Button, View} from 'react-native';
import styles from './style';

const Placeholder = ({limit, total, currenOffset, onPressDown, onPressUp}) => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          disabled={currenOffset < limit ? true : false}
          onPress={onPressDown}
          color="#8A2BE2"
          title="DOWN"
        />
      </View>
      <View style={styles.button}>
        <Button
          disabled={currenOffset < total ? false : true}
          onPress={onPressUp}
          color="#008B8B"
          title="UP"
        />
      </View>
    </View>
  );
};

export default Placeholder;
