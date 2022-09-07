import { Component } from "react";
import Header from "./routes/Header";
import Footer from "./Footer";

class Profile extends Component {

  render() {
    /* TODO: render information about the developers */
    return (
      <>
        <Header />
        <div className='about-info'>
          <h2>**Author**</h2>
          <h3>Storm O'Bryant</h3>
          <h2>**Version**</h2>
          <h3> 1.0.4</h3>
          <h4 style={{fontFamily:"'Niconne', cursive", fontSize:'28px'}}> Template by Code Fellows</h4>
        </div>
        <Footer/>
      </>
    )
  }
};

export default Profile;
