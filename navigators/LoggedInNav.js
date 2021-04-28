import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import TabsNav from "./TabsNav";
import UploadNav from "./UploadNav";
import UploadForm from "../screens/UploadForm";

const Stack = createStackNavigator();

// 이것은 tap 네비게이터임, 어떠한 탭을 눌러 화면을 넘어가는것을 의미함
export default function LoggedInNav() {
    
    return (
        <Stack.Navigator mode="modal">
            <Stack.Screen name="Tabs" options={{ headerShown: false }} component={TabsNav} />
            <Stack.Screen name="Upload" options={{ headerShown: false }} component={UploadNav} />
            <Stack.Screen name="UploadForm" options={{ headerBackTitleVisible: false, headerBackImage: ({ tintColor }) => ( <Ionicons color={tintColor} name="close" size={28} /> ), title: "Upload", headerTintColor: "white", headerStyle: { backgroundColor: "black" } }} component={UploadForm} />
        </Stack.Navigator>
    );
}