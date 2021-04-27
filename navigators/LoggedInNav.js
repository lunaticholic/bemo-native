import React from "react";
import Feed from "../screens/Feed";
import Search from "../screens/Search";
import Profile from "../screens/Profile";
import Notifications from "../screens/Notifications";
import { Ionicons } from "@expo/vector-icons";
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
                options={{ tabBarIcon: ({ focused, color, size }) => ( <Ionicons name="home" color={color} size={focused ? 24 : 20} /> ) }}
            />
            <Tabs.Screen
                name="Search"
                component={Search}
                options={{ tabBarIcon: ({ focused, color, size }) => ( <Ionicons name="search" color={color} size={focused ? 24 : 20} /> ) }}
            />
            <Tabs.Screen
                name="Notifications"
                component={Notifications}
                options={{ tabBarIcon: ({ focused, color, size }) => ( <Ionicons name="heart" color={color} size={focused ? 24 : 20} /> ) }}
            />
            <Tabs.Screen
                name="Profile"
                component={Profile}
                options={{ tabBarIcon: ({ focused, color, size }) => ( <Ionicons name="person" color={color} size={focused ? 22 : 18} /> ) }} 
            />
        </Tabs.Navigator>
    );
}