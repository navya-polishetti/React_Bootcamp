import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    //Create State
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
      profession: "xyz",
    };
    //console.log("Child - constructor" + " " + this.props.name);
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/navya-polishetti");
    const json = await data.json();
    //console.log(json);
    this.setState({
      userInfo: json,
    });

    //console.log("Child - componentDidMount" + " " + this.props.name);
  }

  componentWillUnmount() {
    // console.log("componentWillUnmount");
  }
  render() {
    //console.log("Child - render" + " " + this.props.name);
    return (
      <div>
        <h1>This is a Profile Class Component</h1>

        <h3>Name: {this.state.userInfo.name}</h3>
        <h3>Public_repos: {this.state.userInfo.public_repos}</h3>
        <h3>Profession: {this.props.profession}</h3>
        <img src={this.state.userInfo.avatar_url}></img>
      </div>
    );
  }
}

export default Profile;
