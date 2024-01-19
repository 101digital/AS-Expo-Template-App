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
    justifyContent: 'space-between', // Push content to the top and button to the bottom
  },
  wrapper: {
    flex: 1,
    backgroundColor: colors.White,
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Align button to the center horizontally
    padding: 10, // Adjust padding as needed
  }
  // Define styles for other types here
};

const BottomStickyContent: React.FC<LayoutsProps> = ({ children }) => {
  return (
    <View style={styles.buttonWrapper}>
      {children}
    </View>
  );
};

export default BottomStickyContent;
