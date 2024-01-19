import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { fonts } from '@/assets/fonts';
import { colors } from '@/assets/Colors';
import BottomStickyContent from './bottom-sticky-content';
import FormRows from './form-rows';
import FormColumn from './form-columns';
import Container from './container';
interface LayoutsProps {
  type: string; // Define a more generic type
}


const Layouts: React.FC<LayoutsProps> = ({ children, type }) => {



  if (type === 'bottom-sticky-content') {
    return (
      <BottomStickyContent>
        {children}
      </BottomStickyContent>
    );
  } else if (type === 'form') {
    return (
      <FormRows>
        {children}
      </FormRows>
    );
  } else {
    return (
      <Container>
        {children}
      </Container>
    );
  }
};

export default Layouts;
