import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image source={require("../assets/hafiz.jpeg")} />
      <Text style={{ fontSize: 25, marginVertical: 25 }}>
        Name: Hafiz Ibrahim{"\n"}
        Reg.no: U2/19/CSC/0405{"\n"}
        Supervisor: Dr Ahmad Ibrahim Safana
      </Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
