import { useFonts } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import {NavigationContainer} from "@react-navigation/native"
import { Routes } from "./src/_routes";




export default function App() {
  
  const [fontsLoaded] = useFonts({
    BiennaleBold: require("./assets/fonts/BiennaleBold.otf"),
    BiennaleLight: require("./assets/fonts/BiennaleLight.otf"),
    BiennaleRegular: require("./assets/fonts/BiennaleRegular.otf"),
  });
  return fontsLoaded ? (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  ) : (
    <AppLoading />
  );
}

