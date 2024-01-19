import React, { useState, useEffect } from "react";
import {
  ASContainer,
  ASSpacer,
  ASRow,
  ASText,
  ASVerticalDivider,
} from "app-studio-widgets";

const RegisterScreen: React.FC<any> = ({ navigation, route }) => {
  return (
    <>
      <ASContainer
        style={{ paddingHorizontal: 24, backgroundColor: "#EAEAEB" }}
      >
        <ASSpacer height={"20%"} />
        <ASRow>
          <ASText label="Register" style={{ textAlign: "center" }}></ASText>
          <ASVerticalDivider />
          <ASText label="Testing component" style={{ color: "red" }}></ASText>
        </ASRow>
        <ASSpacer height={"20%"} />
      </ASContainer>
    </>
  );
};

export default RegisterScreen;
