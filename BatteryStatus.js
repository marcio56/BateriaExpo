import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Battery from 'expo-battery';

export default function BatteryStatus() {
  const [batteryPercentage, setBatteryPercentage] = useState(null);

  useEffect(() => {
    const batteryListener = Battery.addBatteryLevelListener(({ batteryLevel }) => {
      setBatteryPercentage((batteryLevel * 100).toFixed(2) + '%');
    });

    return () => {
      batteryListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nível da Bateria:</Text>
      <Text style={styles.percentage}>{batteryPercentage}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
  percentage: {
    fontSize: 48,
  },
});
