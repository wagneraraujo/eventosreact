import { useState } from "react";
import "./home.scss";
import { Link } from "react-router-dom";
import NavbarSite from "../../components/navbar";

function Home() {
  return (
    <>
      <NavbarSite />
      <h2>Home</h2>
    </>
  );
}
export default Home;
