import { View, Text } from "react-native";
import React from "react";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";
import userData from "./recoil/userData";
import { useRecoilState } from "recoil";

const MainStack = () => {
  const [user_data, setUser] = useRecoilState(userData);
  return (
    <View style={{ flex: 1 }}>
      {user_data === null ? <AuthStack /> : <HomeStack />}
    </View>
  );
};

export default MainStack;
