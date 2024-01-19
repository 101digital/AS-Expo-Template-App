import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { fonts } from '@/assets/fonts';
import { colors } from '@/assets/Colors';
interface LayoutsProps {
  type: string; // Define a more generic type
}

// Define a mapping of styles for different types
const styles: Record<string, any> = {
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row', // Change to a row layout
    justifyContent: 'space-between', // Add space between items
    alignItems: 'center',
    backgroundColor: colors.White,
  },
  // Define styles for other types here
};

const FormColumn: React.FC<LayoutsProps> = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        {children.map((child, index) => (
          <View key={index}>{child}</View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default FormColumn;
