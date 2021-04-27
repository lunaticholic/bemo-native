import React from "react";
import Feed from "../screens/Feed";
import Search from "../screens/Search";
import Profile from "../screens/Profile";
import TabIcon from "../components/auth/TabIcon";
import Notifications from "../screens/Notifications";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tabs = createBottomTabNavigator();

// 이것은 tap 네비게이터임, 어떠한 탭을 눌러 화면을 넘어가는것을 의미함
export default function LoggedInNav() {
    return (
        <Tabs.Navigator 
            tabBarOptions={{
                activeTintColor: "white",
                showLabel: false,
                style: {
                    borderTopColor: "rgba(255, 255, 255, 0.3)",
                    backgroundColor: "black",
                },
            }}
        >
            <Tabs.Screen
                name="Feed"
                component={Feed}
                options={{ tabBarIcon: ({ focused, color, size }) => ( <TabIcon iconName="home" color={color} focused={focused} /> ) }}
            />
            <Tabs.Screen
                name="Search"
                component={Search}
                options={{ tabBarIcon: ({ focused, color, size }) => ( <TabIcon iconName="search" color={color} focused={focused} /> ) }}
            />
            <Tabs.Screen
                name="Camera"
                component={View}
                options={{ tabBarIcon: ({ focused, color, size }) => ( <TabIcon iconName={"camera"} color={color} focused={focused} /> ) }}
            />
            <Tabs.Screen
                name="Notifications"
                component={Notifications}
                options={{ tabBarIcon: ({ focused, color, size }) => ( <TabIcon iconName="heart" color={color} focused={focused} /> ) }}
            />
            <Tabs.Screen
                name="Profile"
                component={Profile}
                options={{ tabBarIcon: ({ focused, color, size }) => ( <TabIcon iconName="person" color={color} focused={focused} /> ) }} 
            />
        </Tabs.Navigator>
    );
}