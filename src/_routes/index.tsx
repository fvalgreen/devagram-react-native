import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../_screens/Login";


const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator 
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen name="Login" component={Login} />
      
    </Stack.Navigator>
  )
};

export {Routes};