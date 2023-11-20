import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./screens/Register";
import Login from "./screens/Login";


const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};


export default AuthStack;