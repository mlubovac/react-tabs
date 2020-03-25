import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

import "./styles.css";

const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
