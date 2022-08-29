import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeContainer from "./containers/HomeContainer";
import AboutContainer from "./containers/AboutContainer";

class App extends React.Component {
  state = {
    page: "home"
  };

  ganti = page => {
    this.setState({
      page: page
    });
  };

  render() {
    return (
      <div>
        <Header redirectPage={this.ganti} />
        {/* <button onClick={()=>{this.ganti('home')}}>Home</button>
        <button onClick={()=>{this.ganti('about')}}>Tentang Kami</button>
        <button onClick={()=>{this.ganti('kajian')}}>Kajian</button>
        <button onClick={()=>{this.ganti('mondok')}}>Mondok</button>
        <button onClick={()=>{this.ganti('santren')}}>Santren Kilat</button> */}

        {this.state.page === "home" && <HomeContainer />}
        {this.state.page === "about" && <AboutContainer />}
        <Footer />
      </div>
    );
  }
}

export default App;
