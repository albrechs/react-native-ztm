import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes';

export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton
          size={spacing.xxxl}
          title="1"
          onPress={() => onChangeTime(1)}
        />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton
          size={spacing.xxxl}
          title="10"
          onPress={() => onChangeTime(10)}
        />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton
          size={spacing.xxxl}
          title="15"
          onPress={() => onChangeTime(15)}
        />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton
          size={spacing.xxxl}
          title="20"
          onPress={() => onChangeTime(20)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
});
