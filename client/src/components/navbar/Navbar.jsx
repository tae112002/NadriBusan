import React from "react";
import "./Navbar.css";
import logo from "../../assets/Images/logo.png";

const Navbar = () => {
  return (
    <div className="nav-wrap">
      <div className="logo">
        <img src={logo} className="logo-img" />
        <span className="logo-title">부산나드리</span>
      </div>
      <div className="nav-menu">
        <ul>
          <li>관광명소(명소)</li>
          <li>쇼핑/맛집(쇼핑 맛집)</li>
          <li>공연/전시/축제/체험(해양 체험 축제 공연전시)</li>
          <li>추천여행(테마여행 도보여행)</li>
          <li>
            안내(내주변(지도), 관광안내소, 교통정보)
            <a href="/map">지도</a>
          </li>
        </ul>
      </div>
      <div className="other-menu">
        <p>검색</p>
        <p>언어</p>
      </div>
    </div>
  );
};

export default Navbar;
