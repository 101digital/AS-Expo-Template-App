
import React from "react";
import {
    createStackNavigator,
    CardStyleInterpolators,
} from "@react-navigation/stack";
import Route from "./routes";
import { StyleSheet, TouchableOpacity } from "react-native";
import ArrowBackSvg from "../assets/images/arrow-back.svg";

import LoginScreen from '@/screens/loginScreen/LoginScreen'; 
import RegisterScreen from '@/screens/registerScreen/RegisterScreen'; 
import UserProfileScreen from '@/screens/userProfileScreen/UserProfileScreen'; 
import HomeScreen from '@/screens/homeScreen/HomeScreen'; 
import AccountSummaryScreen from '@/screens/accountSummaryScreen/AccountSummaryScreen'; 
import FinanceScreen from '@/screens/financeScreen/FinanceScreen'; 
import ProfileSummaryScreen from '@/screens/profileSummaryScreen/ProfileSummaryScreen'

const Stack = createStackNavigator();

export const defaultBackButton = (navigation: any) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.backIcon}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <ArrowBackSvg width={18} height={18} fill="#000" />
      </TouchableOpacity>
    );
};

const AppNavigator = ({ navigation }: any) => {
    return (
        <Stack.Navigator
        initialRouteName={Route.LOGIN_SCREEN}
        mode="modal"
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerBackTitleVisible: false,
          headerTitleAlign: "center",
          headerLeft: (props) => props.canGoBack && defaultBackButton(navigation),
        }}
        headerMode="none"
      >
      <Stack.Screen name={Route.LOGIN_SCREEN} component={LoginScreen} />
<Stack.Screen name={Route.REGISTER_SCREEN} component={RegisterScreen} />
<Stack.Screen name={Route.USER_PROFILE_SCREEN} component={UserProfileScreen} />
<Stack.Screen name={Route.HOME_SCREEN} component={HomeScreen} />
<Stack.Screen name={Route.ACCOUNT_SUMMARY_SCREEN} component={AccountSummaryScreen} />
<Stack.Screen name={Route.FINANCE_SCREEN} component={FinanceScreen} />
<Stack.Screen name={Route.PROFILE_SUMMARY_SCREEN} component={ProfileSummaryScreen} />
      </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    backIcon: {
      paddingVertical: 15,
      paddingHorizontal: 24,
    },
});

export default AppNavigator;

  