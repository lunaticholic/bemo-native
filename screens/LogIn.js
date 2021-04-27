import React, { useRef } from "react";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { isLoggedInVar } from "../apollo";
import { gql, useMutation } from "@apollo/client";
import { TextInput } from "../components/auth/AuthShared";

const LOGIN_MUTATION = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
        ok
        token
        error
        }
    }
`;

export default function Login({ navigation }) {
    // 뭔가 필요하다 싶으면 useForm에서 가져오면 됨. FrontEnd파트에서 다뤘자나
    const { register, handleSubmit, setValue, watch } = useForm();
    const passwordRef = useRef();
    
    const onCompleted = (data) => {
    
        const { login: { ok, token } } = data;
        if (ok) { isLoggedInVar(true); }
    };
    
    const [logInMutation, { loading }] = useMutation(LOGIN_MUTATION, { onCompleted, });
    
    const onNext = (nextOne) => { nextOne?.current?.focus(); };
    const onValid = (data) => { 
        if (!loading) {
            logInMutation({
                variables: {
                    ...data,
                }
            });
        } 
    };

    useEffect(() => {
        register("email", { required: true });
        register("password", { required: true });
    }, [register]);
    
    return (
        <AuthLayout>
            <TextInput
                placeholder="EMAIL"
                placeholderTextColor="gray"
                returnKeyType="next"
                placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
                autoCapitalize="none"
                onSubmitEditing={() => onNext(passwordRef)}
                onChangeText={(text) => setValue("email", text)}
            />
            {/* onChangeText는 input란에 뭔가의 변화가 일어날 때마다 setValue에 값을 집어넣겠다는거여 */}
            {/* secureTextEntry로 하게 되면 비밀번호처럼 보여주고, 첫 문자를 대문자로 입력하는걸 방지해준다. */}
            <TextInput
                ref={passwordRef}
                placeholder="PASSWORD"
                placeholderTextColor="gray"
                secureTextEntry
                returnKeyType="done"
                placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
                lastOne={true}
                onSubmitEditing={handleSubmit(onValid)}
                onChangeText={(text) => setValue("password", text)}
            />

            {/* 여기에는 form이 없는 관계로 handleSubmit을 버튼에 적용한다. */}
            <AuthButton text="Log In" disabled={true} onPress={handleSubmit(onValid)} />
        </AuthLayout>
    )
}