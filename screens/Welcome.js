import React from "react";
import styled from "styled-components/native"
import { colors } from "../colors";
import { TouchableOpacity, View } from "react-native";
import AuthLayout from "../components/auth/AuthLayout";
import AuthButton from "../components/auth/AuthButton";

const LoginLink = styled.Text`
    color: ${colors.blue};
    font-weight: 700;
    position: relative;
    top: 50px;
    font-size: 20px;
`;

export default function Welcome({ navigation }) {
    const goToCreateAccount = () => navigation.navigate("CreateAccount");
    const goToLogin = () => navigation.navigate("LogIn");
    return (
        <AuthLayout>
            <AuthButton text="Create Account" disabled={false} onPress={goToCreateAccount} />
            <TouchableOpacity onPress={goToLogin}>
                <LoginLink>
                    Log In
                </LoginLink>
            </TouchableOpacity>
        </AuthLayout>
    )
}