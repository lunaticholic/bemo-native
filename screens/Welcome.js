import React from "react";
import styled from "styled-components/native"
import { TouchableOpacity, View } from "react-native";
import { colors } from "../colors";

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: black;
`;
const Logo = styled.Image`
    max-width: 70%;
`;

const CreateAccount = styled.View`
    background-color: ${colors.blue};
    padding: 7px 10px;
    border-radius: 7px;
    position: relative;
    top: 230px;
`;
const CreateAccountText = styled.Text`
    color: white;
    font-weight: 700;
    font-size: 16px;
`;

const LoginLink = styled.Text`
    color: ${colors.blue};
    font-weight: 700;
    position: relative;
    top: 250px;
    font-size: 16px;
`;

export default function Welcome({ navigation }) {
    const goToCreateAccount = () => navigation.navigate("CreateAccount");
    const goToLogin = () => navigation.navigate("LogIn");
    return (
        <Container>
            <Logo resizeMode="contain" source={require("../assets/login_logo.png")} />
            <TouchableOpacity onPress={goToCreateAccount}>
                <CreateAccount>
                    <CreateAccountText>Create Account</CreateAccountText>
                </CreateAccount>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToLogin}>
                <LoginLink>
                    Log In
                </LoginLink>
            </TouchableOpacity>
        </Container>
    )
}