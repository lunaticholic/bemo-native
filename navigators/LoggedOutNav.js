import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import LogIn from "../screens/LogIn";
import CreateAccount from "../screens/CreateAccount";

const Stack = createStackNavigator();

export default function LoggedOutNav() {
    return (
        // stack을 쌓은 순서대로 화면에 보인다. 즉 맨위에 보일것이다.
        <Stack.Navigator>
            {/* stack.screen은 말 그대로 화면이라고 생각하면 된다. */}
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="CreateAccount" component={CreateAccount} />
        </Stack.Navigator>
    );
}