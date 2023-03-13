import React from "react";
import Categories from "./Categories";
import Footer from "./Footer";
import './Main.css';
import MainFoto from './MainFoto';
import ShowRoom from "./ShowRoom";

function MainPage() {
  return (
    <div>
    <MainFoto />
    <Categories />
    <ShowRoom />
    <Footer />
    </div>
  );
}

export default MainPage;
