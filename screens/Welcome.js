import React from "react";
import styled from "styled-components/native"
import { colors } from "../colors";
import { TouchableOpacity, View } from "react-native";

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: black;
`;
const Logo = styled.Image`
    max-width: 70%;
`;

const CreateAccount = styled.TouchableOpacity`
    background-color: ${colors.blue};
    padding: 7px 10px;
    border-radius: 7px;
    position: relative;
    top: 220px;
    opacity: ${(props) => props.disabled ? "0.5" : "1"};
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
    top: 260px;
    font-size: 16px;
`;

export default function Welcome({ navigation }) {
    const goToCreateAccount = () => navigation.navigate("CreateAccount");
    const goToLogin = () => navigation.navigate("LogIn");
    return (
        <Container>
            <Logo resizeMode="contain" source={require("../assets/login_logo.png")} />
            <CreateAccount disabled={false} onPress={goToCreateAccount}>
                <CreateAccountText>
                    Create Account
                </CreateAccountText>
            </CreateAccount>
            <TouchableOpacity onPress={goToLogin}>
                <LoginLink>
                    Log In
                </LoginLink>
            </TouchableOpacity>
        </Container>
    )
}