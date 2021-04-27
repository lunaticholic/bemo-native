import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import { Asset } from "expo-asset";
import { Ionicons } from "@expo/vector-icons"
import LoggedOutNav from './navigators/LoggedOutNav';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider, useReactiveVar } from "@apollo/client";
import client, { isLoggedInVar, tokenVar } from "./apollo";
import LoggedInNav from "./navigators/LoggedInNav";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  // 앱을 로딩중일 때 앱 로딩을 표시하는 화면을 만들어주는 기능
  const [ loading, setLoading ] = useState(true);
  
  // 앱 로딩이 끝나면 끝났다고 알려주는 기능
  const onFinish = () => setLoading(false);

  const isLoggedIn = useReactiveVar(isLoggedInVar);

  // 앱 로딩을 시작하면 시작한다고 알려주는 기능, preloadAssets는 항상 promise를 리턴해야됨
  const preloadAssets = () => {
    // ionicons 아이콘을 로드해옴
    const fontsToLoad = [Ionicons.font];
    const fontPromises = fontsToLoad.map(font => Font.loadAsync(font));

    // 로그인이미지를 미리 로드해옴
    const imagesToLoad = [require("./assets/login_logo.png")];
    const imagePromises = imagesToLoad.map(image => Asset.loadAsync(image))
    return Promise.all([...fontPromises, ...imagePromises]);
  }

  // token을 얻어보자 얻어내자!
  const preload = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      isLoggedInVar(true);
      tokenVar(token);
    }
    return preloadAssets();
  };

  // 앱을 로딩중일 때 앱 로딩을 표시하는 화면을 만들어주는 기능
  if (loading) {
    return <AppLoading startAsync={preload} onError={console.warn} onFinish={onFinish} />
  }
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        {/* 만약 로그인이 되어 있다면, feed화면이 보이고 로그아웃했으면 홈 화면이 보일거임 */}
        {isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />}
      </NavigationContainer>
    </ApolloProvider>
  );
}
