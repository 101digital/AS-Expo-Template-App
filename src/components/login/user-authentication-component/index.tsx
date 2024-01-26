import React, { useState, useEffect } from "react";
import {
  ASContainer,
  ASSpacer,
  ASText,
  ASFormValidation,
  ASTextField,
  ASRow,
  ASButton,
} from "app-studio-widgets";
import { FormikProps } from "formik";
import * as Yup from "yup";
import Route from "@/navigation/routes";

import { useAuthorization } from "@/context";
const UserAuthenticationComponentComponent: React.FC<any> = ({
  navigation,
  route,
}) => {
  const [loginSuccess, setLoginSuccess] = useState<string>("");
  const [loginError, setLoginError] = useState<string>("");
  const { login } = useAuthorization();
  const onSubmitASFormValidation = async (values) => {
    try {
      const { email, password } = values;
      const response = await login(email, password);
      if (response) {
        navigation.navigate(Route.HOME_SCREEN);
        setLoginSuccess("undefined");
      } else {
        setLoginError("Login failed. Please check your username and password.");
      }
    } catch (error) {
      setLoginError("Login failed. Please check your username and password.");
    }
  };
  const onPressforgotPassword = async () => {
    navigation.navigate(Route.FORGOT_PW_SCREEN, {});
  };
  const onPressviewTC = async () => {
    navigation.navigate(Route.TC_SCREEN, {});
  };
  const onPressregister = async () => {
    navigation.navigate(Route.REGISTER_SCREEN, {});
  };

  return (
    <>
      <ASContainer
        style={{ paddingHorizontal: 24, backgroundColor: "#EAEAEB" }}
      >
        <ASSpacer height={"25%"} />
        <ASText
          label="Welcome to App Studio"
          style={{ textAlign: "center", fontSize: 24 }}
        ></ASText>
        <ASSpacer height={"15%"} />
        <ASFormValidation
          onSubmit={(values) => {
            onSubmitASFormValidation(values);
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .trim()
              .email("Invalid email address")
              .required("Enter email address"),
            password: Yup.string().trim().required("Enter passwrod"),
          })}
          initialValues={{ email: "", password: "" }}
        >
          {(formikProps: FormikProps<any>) => (
            <>
              <ASTextField
                name="email"
                label="Email"
                isEditable={true}
                placeholder={"Email"}
              />
              <ASSpacer height={10} />
              <ASTextField
                name="password"
                label="Password"
                isEditable={true}
                placeholder={"Password"}
                secureTextEntry
              />
              <ASSpacer height={10} />
              <ASRow style={{ justifyContent: "space-between" }}>
                <ASButton
                  label="Forgot password"
                  onPress={() => {
                    onPressforgotPassword();
                  }}
                  simpleTextButton
                />
                <ASButton
                  label="View T&C"
                  onPress={() => {
                    onPressviewTC();
                  }}
                  simpleTextButton
                />
              </ASRow>
              <ASSpacer height={10} />
              <ASButton
                label="Log in"
                onPress={() => {
                  formikProps.handleSubmit();
                }}
              />
              <ASButton
                label="Register"
                onPress={() => {
                  onPressregister();
                }}
                style={{ backgroundColor: "transparent" }}
                textStyle={{ color: "#000" }}
              />
            </>
          )}
        </ASFormValidation>
        <ASText
          label="{loginError}"
          style={{
            textAlign: "center",
            fontSize: 14,
            display: "flex",
            color: "red",
          }}
        ></ASText>
      </ASContainer>
    </>
  );
};

export default UserAuthenticationComponentComponent;
