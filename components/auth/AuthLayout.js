import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: black;
    padding: 0px 40px;
`;

const Logo = styled.Image`
    max-width: 70%;
    width: 100%;
    height: 100px;
    margin-bottom: 20px;
`;

export default function AuthLayout({ children }) {
    // 키보드 입력하는 중인데 빈 공간을 클릭하면 키보드가 사라진다.
    const dismissKeyboard = () => {
        Keyboard.dismiss();
    }
    return (
        // 이 녀석은 Touchable과 비슷한데 시각적 효과는 보여주지 않는다
        <TouchableWithoutFeedback style={{ flex: 1 }} onPress={dismissKeyboard}>
            <Container>
                <Logo resizeMode="contain" source={require("../../assets/login_logo.png")} />
                {children}
            </Container>
        </TouchableWithoutFeedback>
    );
}