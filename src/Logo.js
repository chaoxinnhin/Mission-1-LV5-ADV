import React from "react";
import turnersLogo from "./images/turnerscars_logo_1line_horz_true-rgb-desktop.png";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";

export default function Logo() {
  return (
    <div className="logo__panel">
      <img src={turnersLogo} alt="logo"></img>
      <div className="logo__panelRegistration">
        <p1>
          <BsFillPersonFill />
          <a href="http://localhost:3000/">LOGIN </a>OR{" "}
          <a href="http://localhost:3000/">REGISTER</a>
        </p1>
        <p1>
          <BsFillTelephoneFill />
          <a href="http://localhost:3000/">0800 887 637</a>
        </p1>
        <p1>
          <MdLocationPin />
          <a href="http://localhost:3000/">Find Us</a>
        </p1>
        <p1>
          <a href="http://localhost:3000/">中文</a>
        </p1>
      </div>
    </div>
  );
}
