import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import LogIn from "../screens/LogIn";
import CreateAccount from "../screens/CreateAccount";
import { YellowBox } from "react-native";

const Stack = createStackNavigator();

export default function LoggedOutNav() {
    return (
        // Stack을 쌓은 순서대로 화면에 보인다. 즉 맨위에 보일것이다.
        // initialRouteName을 사용하면 해당 페이지가 제일 먼저 보인다
        // mode를 사용할수도 있는데, card 혹은 modal(화면이 밑에서 올라옴)이 있으며 card가 default 값이다
        // headerMode도 있는데, 아무것도 설정하면 화면상단의 헤더가 페이드인아웃이 되지만(float)
        // creen은 화면전체가(헤더포함) 움직이면서 이동한다
        // option도 있는데, 이건 각각의 화면으로 값들을 보낼 수 있다.
        <Stack.Navigator screenOptions={{
            headerBackTitleVisible: false,
            headerTitle: false,
            headerTransparent: true,
            headerTintColor: "white"
        }}>
            {/* stack.screen은 말 그대로 화면이라고 생각하면 된다. */}
            <Stack.Screen name="Welcome" options={{ headerShown: false }} component={Welcome} />
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="CreateAccount" component={CreateAccount} />
        </Stack.Navigator>
    );
}