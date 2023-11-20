import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Colors } from "../theme";
import { data } from "../data";
import {
  MaterialCommunityIcons,
  Entypo,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
import userData from "../recoil/userData";
import { useRecoilState } from "recoil";

const Home = ({ navigation }) => {
  const [user_data, setUser] = useRecoilState(userData);

  const logOUt= ()=>{
    setUser(null)
  }

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ height: 250, alignItems: "center", justifyContent: "center" }}
        source={require("../assets/explore.jpg")}
      >
        <TouchableOpacity
          onPress={()=>navigation.navigate("profile")}
          style={{
            height: 40,
            width: 40,
            borderRadius: 3,
            borderWidth: 1,
            borderColor: "white",
            alignItems: "center",
            justifyContent: "center",
            position: 'absolute',
            top: 20, right: 20
          }}
        >
          <MaterialIcons name="account-circle" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>logOUt()}
          style={{
            height: 40,
            width: 80,
            borderRadius: 3,
            borderWidth: 1,
            borderColor: "white",
            alignItems: "center",
            justifyContent: "center",
            position: 'absolute',
            top: 20, right: 67
          }}
        >
          <Text style={{fontWeight: "bold", color: "white"}}>Log Out</Text>
        </TouchableOpacity>
        <TouchableOpacity
         
          style={{
            height: 40,
            width: 80,
            borderRadius: 3,
            borderWidth: 1,
            borderColor: "white",
            alignItems: "center",
            justifyContent: "center",
            position: 'absolute',
            top: 20, left: 10
          }}
        >
          <Text style={{fontWeight: "bold", color: "white"}}>{user_data.name}</Text>
        </TouchableOpacity>


        <Text style={{ fontSize: 35, color: "white", textAlign: "center" }}>
          Explore{"\n"}Meditations
        </Text>
      </ImageBackground>

      <ScrollView
        style={{
          backgroundColor: "black",
          paddingHorizontal: 5,
          paddingVertical: 15,
        }}
      >
        {data.map((d) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Meditate", { data: d })}
            style={styles.btn}
            key={d.id}
          >
            <MaterialCommunityIcons
              name="meditation"
              size={40}
              color={Colors.green}
            />
            <View style={{ flexGrow: 1 }}>
              <Text
                style={{
                  color: Colors.green,
                  fontWeight: "bold",
                  fontSize: 18,
                  marginBottom: 5,
                }}
              >
                {d.title}
              </Text>
              <Text style={{ color: "white", fontSize: 14, marginBottom: 5 }}>
                <AntDesign name="clockcircleo" size={14} color="white" />{" "}
                {d.time} mins
              </Text>
            </View>
            <Entypo name="dots-three-horizontal" size={18} color="white" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  btn: {
    // height: 60,
    marginBottom: 10,
    display: "flex",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: Colors.green,
    marginTop: 5,
    borderRadius: 5,
    flexDirection: "row",
    gap: 15,
  },
});
