import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import { IContainer } from "./types";
import styles from "./styles";

const Container = (props: IContainer) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>{props.children}</View>
      <Footer currentTab={props.footerProps.currentTab}/>
    </SafeAreaView>
  );
};
export default Container;
