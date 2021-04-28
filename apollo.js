import { ApolloClient, createHttpLink, InMemoryCache, makeVar } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { offsetLimitPagination } from "@apollo/client/utilities";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";

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

// 니가 지금 핸드폰으로 사진 찍는걸 테스트 하고 싶으면 터미널 하나 열어
// npx localtunnel --port 4000을 치면 주소 하나가 나올거야
// 그 주소를 아래 /graphql전까지 바꿔야만 테스트할 수 있어
const uploadHttpLink = createUploadLink({
    uri: "https://polite-crab-54.loca.lt/graphql",
});

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            token: tokenVar(),
        },
    };
});

const onErrorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        console.log(`GraphQL Error`, graphQLErrors);
    }
    if (networkError) {
        console.log("Network Error", networkError);
    }
});

export const cache = new InMemoryCache({ typePolicies: { Query: { fields: { seeFeed: offsetLimitPagination() } } } } );

const client = new ApolloClient({ link: authLink.concat(onErrorLink).concat(uploadHttpLink), cache });

export default client;