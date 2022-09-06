import { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

class Profile extends Component {

  render() {
    /* TODO: render information about the developers */
    return (
      <>
        <Header />
        <h3>**Author**: Storm O'Bryant<br />
          **Version**: 1.0.2</h3>
        <h4> Template by Code Fellows</h4>
        <Footer/>
      </>
    )
  }
};

export default Profile;
