import React from "react";
import { logo } from "../../public";
import ContentOver from "./ContentOver";
import MembershipComponent from "./MembershipComponent";
const Header = () => {
  return (
    <>
    <div className="home_header">
      <img src={logo}></img>
      <div className="home_header_left">
        <select name="Language" id="Lang">
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
        <button>Sign In</button>
      </div>
    </div>
    <ContentOver />
    <MembershipComponent />
    </>
  );
};

export default Header;
