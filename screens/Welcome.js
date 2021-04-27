import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default function Welcome({navigation}) {
    
    return (
        <View>
            <Text>
                Welcome!!
            </Text>
            {/* navigation은 위에서 선언, navigate 메소드를 통해 해당 페이지로 이동할 수 있다.
                참고로 우리가 이동하는게 아니라 화면이 이쪽으로 오는것이다.
                navigate안에 들어가는 이름은 navigation에서 선언한 이름과 동일해야한다.
                path랑 같네
            */}
            <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
                <View>
                    <Text>
                        Go to Create Account
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
                <View>
                    <Text>
                        Go to LogIn
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}