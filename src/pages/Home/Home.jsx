import React from "react";
import Header from "../../components/Header/Header";
import Cards from "../../components/Cards/Cards";
import Footer from "../../components/Footer/Footer";
import MobileFooter from "../../components/Footer/MobileFooter";
import { HomeStyle } from "./HomeStyle";
import Notification from "../../components/notification/Notification";

const Home = () => {
  return (
    <HomeStyle>
      <Notification />
      <Header />
      <Cards />
      <Footer />
      <MobileFooter />
    </HomeStyle>
  );
};

export default Home;
