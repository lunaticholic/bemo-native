import React from "react";
import AuthLayout from "../components/auth/AuthLayout";
import { Text, View, TouchableOpacity } from "react-native";
import { TextInput } from "../components/auth/AuthShared";
import AuthButton from "../components/auth/AuthButton";

export default function Login({ navigation }) {
    return (
        <AuthLayout>
            <TextInput
                placeholder="USERNAME"
                placeholderTextColor="gray"
                returnKeyType="next"
                placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
            />
            {/* secureTextEntry로 하게 되면 비밀번호처럼 보여주고, 첫 문자를 대문자로 입력하는걸 방지해준다. */}
            <TextInput
                placeholder="PASSWORD"
                placeholderTextColor="gray"
                secureTextEntry
                returnKeyType="done"
                placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
                lastOne={true}
            />

            <AuthButton text="Log In" disabled={true} onPress={() => null}/>
        </AuthLayout>
    )
}