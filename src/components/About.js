import { Outlet } from "react-router-dom";
import React from "react";
import ProfileFunctionalComponent from "./Profile";
import ProfileClass from "./ProfileClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Parent - constructor");
  }
  componentDidMount() {
    // console.log("parent - componentDidMount");
  }
  render() {
    // console.log("parent - render");
    return (
      <div>
        <h1>About Us Page</h1>
        <p>This is a Namaste React Course 07-Finding a path</p>
        <ProfileFunctionalComponent profession={"Frontend Developer"} />
        <ProfileClass profession={"Frontend Developer"} />
      </div>
    );
  }
}

export default About;
