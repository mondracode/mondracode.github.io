import * as React from 'react';
import Logo from '../images/jesus.gif';
import "./index.css"

const IndexPage = () => {
  return (
    <div className="container">
      <div className="logo">
        <img src={Logo} />
      </div>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Santiago Mondragón Gómez | Web developer</title>;