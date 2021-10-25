import React from "react";

const Header = ({tagline}) => (
  <header className="top">
    <h1>
      Bids
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>
      Week
    </h1>
    <h3 className="tagline">
      <span>{tagline}</span>
    </h3>
  </header>
);

export default Header;
