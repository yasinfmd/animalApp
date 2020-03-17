import React from "react";
import { connect } from "react-redux";
import { Container, Content } from "native-base";
import CustomHeader from "../components/customHeader";
import ProfileCard from "../components/profileCard";

class UserProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      headerTitle: ""
    };
  }

  componentDidMount() {
    this.setState({
      user: this.props.route.params.user
    });
  }

  render() {
    return (
      <Container>
        <CustomHeader
          iconame={"arrow-back"}
          headertitle={this.state.user.uFullName}
          headerleftPress={() => {
            this.props.navigation.pop();
          }}
        />
        <Content>
          <ProfileCard user={this.state.user} />
        </Content>
      </Container>
    );
  }
}

export default UserProfileScreen;
