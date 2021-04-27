import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/Feed";

const Tabs = createBottomTabNavigator();

// 이것은 tap 네비게이터임, 어떠한 탭을 눌러 화면을 넘어가는것을 의미함
export default function LoggedInNav() {
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Feed" component={Feed} />
        </Tabs.Navigator>
    );
}