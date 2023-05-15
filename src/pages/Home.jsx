import React from "react";
import Layout from "../components/Layout/Layout";

import banner from "../images/hero01.png";
import "../styles/HomeStyle.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${banner})` }}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food In India</p>
          <Link to={"/menu"}>
            <button>Order Now</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
