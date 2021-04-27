import React from "react";
import { Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: black;
    padding: 0px 20px;
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
                {/* 입력칸이 키보드에 가리니까 가리는걸 없애주자, behavior를 padding으로 설정하면 마치 폼 전체가 위아래로 움직이는 느낌이 든다. */}
                {/* keyboardVerticalOffset은 키보드와 contents 간의 간격인데 여기서는 platform os가 ios면 30의 간격을 넓히라고 하였다 */}
                <KeyboardAvoidingView style={{ width: "100%"}} behavior="position" keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 0} >
                    <Logo resizeMode="contain" source={require("../../assets/login_logo.png")} />
                    {children}
                </KeyboardAvoidingView>
            </Container>
        </TouchableWithoutFeedback>
    );
}