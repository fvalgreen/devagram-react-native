import { Text, View } from "react-native";
import Container from "../../_components/Container";

const Home = () => {
  return (
    <Container 
    footerProps={{currentTab: 'Home'}}
    headerProps={{default: true}}
    
    >
      <Text>Home</Text>
    </Container>
  );
};

export default Home;
