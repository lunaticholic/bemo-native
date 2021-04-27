import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const isLoggedInVar = makeVar(false);
// 토큰이 발급될 떄마다 reactive variable 상에서 token을 사용할 수 있도록 준비가 되어 있다는 뜻
// 그 말은 곧, 로그인해도 안없어진다는 슬기로운 이야기구만
export const tokenVar = makeVar("");

// 이 구문 FrontEnd에서 봤자나.. token받아서 저장하는거
export const logUserIn = async (token) => {
    await AsyncStorage.multiSet([
        ["token", token],
        ["loggedIn", "yes"],
    ]);
    isLoggedInVar(true);
    tokenVar(token);
};

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
});
export default client;