import { ApolloClient, createHttpLink, InMemoryCache, makeVar } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { offsetLimitPagination } from "@apollo/client/utilities";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const isLoggedInVar = makeVar(false);
// 토큰이 발급될 떄마다 reactive variable 상에서 token을 사용할 수 있도록 준비가 되어 있다는 뜻
// 그 말은 곧, 로그인해도 안없어진다는 슬기로운 이야기구만
export const tokenVar = makeVar("");

const TOKEN = "token";

// 이 구문 FrontEnd에서 봤자나.. token받아서 저장하는거
export const logUserIn = async (token) => {
    await AsyncStorage.setItem(TOKEN, token);
    isLoggedInVar(true);
    tokenVar(token);
};

export const logUserOut = async () => {
    await AsyncStorage.removeItem(TOKEN);
    isLoggedInVar(false);
    tokenVar(null);
};

const httpLink = createHttpLink({
    uri: "http://localhost:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            token: tokenVar(),
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                seeFeed: offsetLimitPagination(),
                },
            },
        },
    }),
});

export default client;