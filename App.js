import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { RecoilRoot } from "recoil";
import MainStack from "./MainStack";

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <MainStack />
        </View>
      </NavigationContainer>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },
});
