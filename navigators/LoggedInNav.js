import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabsNav from "./TabsNav";
import UploadNav from "./UploadNav";

const Stack = createStackNavigator();

// 이것은 tap 네비게이터임, 어떠한 탭을 눌러 화면을 넘어가는것을 의미함
export default function LoggedInNav() {
    
    return (
        <Stack.Navigator headerMode="none" mode="modal">
            <Stack.Screen name="Tabs" component={TabsNav} />
            <Stack.Screen name="Upload" component={UploadNav} />
        </Stack.Navigator>
    );
}