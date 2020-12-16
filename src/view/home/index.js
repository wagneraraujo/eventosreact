import { useState } from "react";
import "./home.scss";
import { Link } from "react-router-dom";
import NavbarSite from "../../components/navbar";
import { useSelector } from "react-redux";

function Home() {
  return (
    <>
      <NavbarSite />
      <h2>{useSelector(state => state.usuarioEmail)}</h2>
    </>
  );
}
export default Home;
