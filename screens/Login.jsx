import {
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRecoilState } from "recoil";
import userData from "../recoil/userData";

const Login = ({ navigation }) => {
  const [user_data, setUser] = useRecoilState(userData);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
    console.log(users);
  }, []);

  const getAllUsers = async () => {
    await AsyncStorage.getItem("users").then((value) => {
      if (value !== null) {
        setUsers(JSON.parse(value));
      }
    });
  };

  const login = async () => {
    try {
      if (email === "" || password === "") {
        Alert.alert("Incomplete", "Please enter both email and password");
        return;
      }

      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        Alert.alert("Success", "Login successful");
        setUser(user)
        // You can now navigate to the main part of your app or perform any other necessary actions for a successful login.
      } else {
        Alert.alert(
          "Invalid Credentials",
          "Please check your email and password"
        );
      }
    } catch (error) {
      console.error("Error during login: ", error);
    }
  };

  return (
    <ImageBackground source={require("../assets/bg.jpg")} style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "black",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0.4,
        }}
      ></View>
      <View
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          display: "flex",
          paddingTop: 50,
          // alignItems: "center",
          // justifyContent: "center",
          left: 0,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 26,
            fontWeight: "bold",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Login
        </Text>

        <View style={{ width: "100%", paddingHorizontal: 25 }}>
          <Text style={{ color: "white" }}>Enter Email Address</Text>
          <TextInput
            value={email}
            onChangeText={(e) => setEmail(e)}
            placeholderTextColor="gray"
            placeholder="Email"
            style={styles.input}
          />
          <Text style={{ color: "white" }}>Enter Password</Text>
          <TextInput
            value={password}
            onChangeText={(e) => setPassword(e)}
            placeholderTextColor="gray"
            placeholder="Password"
            style={styles.input}
          />
          <TouchableOpacity onPress={login} style={styles.btn}>
            <Text style={{ color: "white" }}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            style={[styles.btn, { backgroundColor: "black" }]}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: "#ddd",
    height: 45,
    width: "100%",
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 4,
    marginBottom: 15,
    color: "white",
  },
  btn: {
    height: 45,
    width: "100%",
    borderRadius: 5,
    marginTop: 4,
    marginBottom: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.green,
  },
});
