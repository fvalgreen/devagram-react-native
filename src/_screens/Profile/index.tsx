import { Text, View } from "react-native";
import Container from "../../_components/Container";
import Feed from "../../_components/Feed";

const Profile = () => {
  return (
    <Container 
    footerProps={{currentTab: 'Profile'}}
    headerProps={{default: true}}    
    >
    <Feed />
    </Container>
  );
};

export default Profile;
