import React, { useRef } from "react";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { TextInput } from "../components/auth/AuthShared";

const CREATE_ACCOUNT_MUTATION = gql`
    mutation createAccount(
        $username: String!
        $email: String!
        $password: String!
    ) {
        createAccount(
        username: $username
        email: $email
        password: $password
        ) {
        ok
        error
        }
    }
`;

export default function CreateAccount({ navigation }) {
    const { register, handleSubmit, setValue, getValues } = useForm();

    const onCompleted = (data) => {
        const {
            createAccount: { ok },
        } = data;
        const { username, password } = getValues();
        if (ok) {
            navigation.navigate("LogIn", {
                username,
                password,
            });
        }
    };
    const [createAccountMutation, { loading }] = useMutation(
    CREATE_ACCOUNT_MUTATION,
    {
        onCompleted,
    }
    );


    const userNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    // 키보드에서 next를 누르면 다음 칸으로 넘어가는 기능
    const onNext = (nextOne) => {
        nextOne?.current?.focus();
    }

    // 키보드에서 done을 누르면 마치 Create Account를 누른 것과 같은 기능
    const onValid = (data) => {
        if (!loading) {
            createAccountMutation({ variables: { ...data } });
        }
    }

    useEffect(() => {
        register("username", {
            required: true,
        });
        register("email", {
            required: true,
        });
        register("password", {
            required: true,
        });
    }, [register]);

    return (
        <AuthLayout>
            <TextInput
                ref={userNameRef}
                placeholder="USERNAME"
                placeholderTextColor="gray"
                returnKeyType="next"
                autoCapitalize="none"
                placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
                onSubmitEditing={() => onNext(emailRef)}
                onChangeText={(text) => setValue("username", text)}
            />
            
            {/* keyboardType을 email-address로 하면 키보드가 자동으로 email입력방식으로 바뀐다. */}
            <TextInput
                ref={emailRef}
                placeholder="EMAIL"
                placeholderTextColor="gray"
                keyboardType="email-address"
                returnKeyType="next"
                autoCapitalize="none"
                placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
                onSubmitEditing={() => onNext(passwordRef)}
                onChangeText={(text) => setValue("email", text)}
            />
            
            {/* secureTextEntry로 하게 되면 비밀번호처럼 보여주고, 첫 문자를 대문자로 입력하는걸 방지해준다. */}
            <TextInput
                ref={passwordRef}
                placeholder="PASSWORD"
                placeholderTextColor="gray"
                secureTextEntry
                returnKeyType="done"
                placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
                lastOne={true}
                onChangeText={(text) => setValue("password", text)}
                onSubmitEditing={handleSubmit(onValid)}
            />

            <AuthButton text="Create Account" disabled={false} onPress={handleSubmit(onValid)} />
        </AuthLayout>
        
    )
}