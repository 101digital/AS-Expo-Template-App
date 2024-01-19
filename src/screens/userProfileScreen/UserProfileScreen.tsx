import React, { useState, useEffect } from "react";
import {
  Container,
  FormValidation,
  ASText,
  TextField,
  SelectField,
} from "app-studio-widgets";

import UserProfileComponentComponent from "@/components/userprofile/user-profile-component";

const UserProfileScreen: React.FC<any> = ({ navigation, route }) => {
  return (
    <>
      <UserProfileComponentComponent navigation={navigation} route={route} />
    </>
  );
};

export default UserProfileScreen;
