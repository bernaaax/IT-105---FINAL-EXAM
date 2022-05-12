import React from "react";
const year = new Date().getFullYear();
function Footer() {
  return <footer style={{background: "grey", color: "white"}}><p>{year}</p></footer>;
}

export default Footer;
