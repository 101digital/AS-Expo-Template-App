import React, { useState, useEffect } from "react";

import UserAuthenticationComponentComponent from "@/components/login/user-authentication-component";

const LoginScreen: React.FC<any> = ({ navigation, route }) => {
  return (
    <>
      <UserAuthenticationComponentComponent
        navigation={navigation}
        route={route}
      />
    </>
  );
};

export default LoginScreen;
