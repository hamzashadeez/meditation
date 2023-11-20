import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Meditate from "./screens/Meditate";
import Profile from "./screens/Profile";
import Register from "./screens/Register";



const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Meditate" component={Meditate} />
      <Stack.Screen name="profile" component={Profile} />
    </Stack.Navigator>
  );
};


export default HomeStack;