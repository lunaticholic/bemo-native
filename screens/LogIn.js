import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default function Login({navigation}) {
    return (
        <View>
            <Text>
                Login Page
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
                <View>
                    <Text>
                        Go to Create Account
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}