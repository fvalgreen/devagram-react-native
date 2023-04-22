import { Text, View } from "react-native";
import Container from "../../_components/Container";
import Feed from "../../_components/Feed";

const Home = () => {
  return (
    <Container 
    footerProps={{currentTab: 'Home'}}
    headerProps={{default: true}}
    
    >
    <Feed />
    </Container>
  );
};

export default Home;
