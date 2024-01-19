import React from 'react';
import { StyleSheet, SafeAreaView, View ,ScrollView} from 'react-native';
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
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: colors.White,
  }
  // Define styles for other types here
};

const Container: React.FC<LayoutsProps> = ({ children }) => {

  return (
    < >
      <View style={styles.wrapper}>{children}</View>
    </ >
  );
};

export default Container;
