import { Text, View } from "react-native";
import Container from "../../_components/Container";

const Home = () => {
  return (
    <Container footerProps={{currentTab: 'Home'}}>
      <Text>Home</Text>
    </Container>
  );
};

export default Home;
