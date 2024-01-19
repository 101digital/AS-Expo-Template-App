import React, { useState, useEffect } from "react";
import {
  ASContainer,
  ASSpacer,
  ASRow,
  ASText,
  ASButton,
} from "app-studio-widgets";

import Route from "@/navigation/routes";
import UserProfileComponentComponent from "@/components/home/user-profile-component";
import { useMembership } from "@/context";
const HomeScreen: React.FC<any> = ({ navigation, route }) => {
  const [userDetails, setUserDetails] = useState<any>(null);
  const { getProfile } = useMembership();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProfile();
        if (response) {
          setUserDetails(response);
        } else {
        }
      } catch (error) {
        setError("'An error occurred during login. Please try again.'");
      }
    };

    fetchData();
  }, []);
  const onPressundefined = async () => {
    navigation.navigate(Route.SETTINGS_SCREEN, {});
  };

  return (
    <>
      <UserProfileComponentComponent navigation={navigation} route={route} />
      <ASContainer
        style={{ paddingHorizontal: 24, backgroundColor: "#EAEAEB" }}
      >
        <ASSpacer height={20} />
        <ASRow style={{ justifyContent: "space-between" }}>
          <ASText style={{ textAlign: "center", fontSize: 24 }}>
            {userDetails?.firstName ?? ""}
          </ASText>
          <ASButton
            label="Settings"
            onPress={() => {
              onPressundefined();
            }}
          />
        </ASRow>
        <ASRow style={{ justifyContent: "space-between" }}>
          <ASText style={{ textAlign: "center", fontSize: 24 }}>
            {userDetails?.email ?? ""}
          </ASText>
        </ASRow>
        <ASRow style={{ justifyContent: "space-between" }}>
          <ASText style={{ textAlign: "center", fontSize: 24 }}>
            {userDetails?.dateOfBirth ?? ""}
          </ASText>
        </ASRow>
      </ASContainer>
    </>
  );
};

export default HomeScreen;
