import React, { useRef } from "react";
import { TextInput } from "react-native";
import styled from "styled-components/native"
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";

export default function CreateAccount() {
    const userNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    // 키보드에서 next를 누르면 다음 칸으로 넘어가는 기능
    const onNext = (nextOne) => {
        nextOne?.current?.focus();
    }

    // 키보드에서 done을 누르면 마치 Create Account를 누른 것과 같은 기능
    const onDone = () => {
        alert("회원가입이 완료되었습니다.");
    }
    return (
        <AuthLayout>
            <TextInput
                ref={userNameRef}
                placeholder="USERNAME"
                placeholderTextColor="gray"
                returnKeyType="next"
                style={{ backgroundColor: "white", width: "100%"}}
                onSubmitEditing={() => onNext(emailRef)}
            />
            
            {/* keyboardType을 email-address로 하면 키보드가 자동으로 email입력방식으로 바뀐다. */}
            <TextInput
                ref={emailRef}
                placeholder="EMAIL"
                placeholderTextColor="gray"
                keyboardType="email-address"
                returnKeyType="next"
                style={{ backgroundColor: "white", width: "100%"}}
                onSubmitEditing={() => onNext(passwordRef)}
            />
            
            {/* secureTextEntry로 하게 되면 비밀번호처럼 보여주고, 첫 문자를 대문자로 입력하는걸 방지해준다. */}
            <TextInput
                ref={passwordRef}
                placeholder="PASSWORD"
                placeholderTextColor="gray"
                secureTextEntry
                returnKeyType="done"
                style={{ backgroundColor: "white", width: "100%"}}
                onSubmitEditing={onDone}
            />

            <AuthButton text="Create Account" disabled={true} onPress={() => null}/>
        </AuthLayout>
    )
}