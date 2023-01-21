import React, { useState } from "react";
import "../App.scss";
import logo from "../images/melted-chocolate.png";

export default function HeaderBar() {
  return <img src={logo} alt="Logo" className="logo" />;
}
