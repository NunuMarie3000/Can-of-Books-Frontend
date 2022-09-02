import { Component } from "react";
import Navigation from "./Navigation";

class Profile extends Component {

  render() {
    /* TODO: render information about the developers */
    return (
      <>
        <Navigation />
        <h3>**Author**: Storm O'Bryant<br />
          **Version**: 1.0.0</h3>
      </>
    )
  }
};

export default Profile;
