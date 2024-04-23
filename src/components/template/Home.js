import { Component } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Products from "../layouts/Products";
import Sidebar from "../layouts/Sidebar";

class Home extends Component {
  render() {
    return (
      <div className="home container-fluid p-0">
        <div class="row">
          <Header />
        </div>
        <div class="row">
          <div class="col-4 px-0">
            <Sidebar />
          </div>
          <div class="col-8 px-0">
            <Products />
          </div>
        </div>
        <div class="row">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
