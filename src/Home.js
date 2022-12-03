/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components

// Material Dashboard 2 React components
// import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import "Home.css";
import banner from "banner.jpg";
// Data

// Dashboard components

function Home() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div className="home-main">
        <img src={banner} className="home-bg" alt="c1" />
        <div className="home-container">
          <h1 className="home-head">FARMING COMPANY</h1>
          <p className="home-p">
            the moto behind building this website is the person who feeds us should be able to feed
            his family too!!!
          </p>
          <link className="head-link" href="" />
          <div className="home-group">
            <div className="home-card">
              <div className="card-matter">
                <img
                  className="card-img"
                  src="https://media.istockphoto.com/id/1323987265/vector/indian-farmer-plows-the-agricultural-field-using-bullocks.jpg?b=1&s=612x612&w=0&k=20&c=s-opGuS2tx69F_lmYHmy_wq-B2h4C4rVHjsLswrC2Kc="
                  alt="c3"
                />
                <h1 className="card-head">farmer</h1>
                <p>akjhf kjh lkrfh lka alshfla alsgflahb ahlsdf</p>
                <link href="" />
              </div>
            </div>
            <div className="home-card">
              <div className="card-matter">
                <img
                  className="card-img"
                  src="https://media.istockphoto.com/id/1323987265/vector/indian-farmer-plows-the-agricultural-field-using-bullocks.jpg?b=1&s=612x612&w=0&k=20&c=s-opGuS2tx69F_lmYHmy_wq-B2h4C4rVHjsLswrC2Kc="
                  alt="c3"
                />
                <h1 className="card-head">transporter</h1>
                <p>akjhf kjh lkrfh lka alshfla alsgflahb ahlsdf</p>
                <link href="" />
              </div>
            </div>
            <div className="home-card">
              <div className="card-matter">
                <img
                  className="card-img"
                  src="https://media.istockphoto.com/id/1323987265/vector/indian-farmer-plows-the-agricultural-field-using-bullocks.jpg?b=1&s=612x612&w=0&k=20&c=s-opGuS2tx69F_lmYHmy_wq-B2h4C4rVHjsLswrC2Kc="
                  alt="c3"
                />
                <h1 className="card-head">customer</h1>
                <p>akjhf kjh lkrfh lka alshfla alsgflahb ahlsdf</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </DashboardLayout>
  );
}

export default Home;
