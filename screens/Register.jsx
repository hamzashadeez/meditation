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

const Register = ({ navigation }) => {
  const [user_data, setUser] = useRecoilState(userData);

  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const value = await AsyncStorage.getItem("users");
      if (value !== null) {
        setUsers(JSON.parse(value));
        console.log(JSON.parse(value))
      }
    } catch (error) {
      console.error("Error retrieving users from AsyncStorage: ", error);
    }
  };

  const register = async () => {
    try {
      if (name === "" || email === "" || password === "") {
        Alert.alert("Incomplete", "Please enter all fields");
        return;
      }

      // Check if user with the same email already exists
      const userExists = users.some((u) => u.email === email);
      if (userExists) {
        Alert.alert("User Exists", "Please use another email");
        return;
      }

      const newUser = { email, password, name };
      const updatedUsers = [...users, newUser];
      setUsers(updatedUsers);

      await AsyncStorage.setItem("users", JSON.stringify(updatedUsers));

      Alert.alert("Success", "Registration is successful");
      setUser(newUser)
    } catch (error) {
      console.error("Error during registration: ", error);
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
          Meditation & Relaxation
        </Text>
        <Text
          style={{
            color: "#ddd",
            fontSize: 20,
            textAlign: "center",
            textTransform: "uppercase",
            marginBottom: 15,
          }}
        >
          By Hafiz
        </Text>

        <View style={{ width: "100%", paddingHorizontal: 25 }}>
          <Text style={{ color: "white" }}>Enter Your Name</Text>
          <TextInput
            value={name}
            onChangeText={(e) => setName(e)}
            placeholderTextColor="gray"
            placeholder=" Name"
            style={styles.input}
          />
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
          <TouchableOpacity onPress={() => register()} style={styles.btn}>
            <Text style={{ color: "white" }}>Continue</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={[styles.btn, { backgroundColor: "black" }]}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Register;

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
