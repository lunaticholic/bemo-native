import React from "react";
import { TextInput } from "react-native";
import styled from "styled-components/native"
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";

export default function CreateAccount() {
    return (
        <AuthLayout>
            <TextInput placeholder="USERNAME" placeholderTextColor="gray" returnKeyType="next" style={{ backgroundColor: "white", width: "100%"}} />
            {/* keyboardType을 email-address로 하면 키보드가 자동으로 email입력방식으로 바뀐다. */}
            <TextInput placeholder="EMAIL" placeholderTextColor="gray" keyboardType="email-address" returnKeyType="next" style={{ backgroundColor: "white", width: "100%"}} />
            {/* secureTextEntry로 하게 되면 비밀번호처럼 보여주고, 첫 문자를 대문자로 입력하는걸 방지해준다. */}
            <TextInput placeholder="PASSWORD" placeholderTextColor="gray" secureTextEntry returnKeyType="done" style={{ backgroundColor: "white", width: "100%"}} />
            <AuthButton text="Create Account" disabled={true} onPress={() => null}/>
        </AuthLayout>
    )
}