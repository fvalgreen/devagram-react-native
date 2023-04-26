import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { IContainer } from "./types";
import styles from "./styles";
import Search from "./Header/Search";

const Container = (props: IContainer) => {
  const [filter, setFilter] = useState<string>("");
  return (
    <SafeAreaView style={styles.container}>
      <Header
        profileHeader={props.headerProps.profileHeader}
        default={props.headerProps.default}
        headerNewPublication={props.headerProps.headerNewPublication}
        searchBar={{
          value: filter,
          onChange: (value: string) => {setFilter(value);}
        }}
      />
      <Search filter={filter}/>
      <View style={styles.content}>{props.children}</View>
      <Footer currentTab={props.footerProps.currentTab}  />
    </SafeAreaView>
  );
};
export default Container;
