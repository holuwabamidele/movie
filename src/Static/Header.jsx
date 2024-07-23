import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import homeicon from "../assets/images/home-icon.svg";
import searchicon from "../assets/images/search-icon.svg";
import watchicon from "../assets/images/watchlist-icon.svg";
import originalicon from "../assets/images/original-icon.svg";
import movieicon from "../assets/images/movie-icon.svg";
import seriesicon from "../assets/images/series-icon.svg";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Nav>
      <Logo>
        <Link to="/home">
          <img src={logo} alt="logo" />
        </Link>
      </Logo>
      <NavMenu>
        <a href="/home">
          <img src={homeicon} alt="logo" />
          <span>HOME</span>
        </a>
        <a
          onClick={() => {
            Swal.fire({
              icon: "error",
              title: "Sorry",
              text: "Page is Under Construction!",
            });
          }}
        >
          <img src={searchicon} alt="logo" />
          <span>SEARCH</span>
        </a>
        <a
          onClick={() => {
            Swal.fire({
              icon: "error",
              title: "Sorry",
              text: "Page is Under Construction!",
            });
          }}
        >
          <img src={watchicon} alt="logo" />
          <span>WATCHLIST</span>
        </a>
        <a
          onClick={() => {
            Swal.fire({
              icon: "error",
              title: "Sorry",
              text: "Page is Under Construction!",
            });
          }}
        >
          <img src={originalicon} alt="logo" />
          <span>ORIGINALS</span>
        </a>
        <a
          onClick={() => {
            Swal.fire({
              icon: "error",
              title: "Sorry",
              text: "Page is Under Construction!",
            });
          }}
        >
          <img src={movieicon} alt="logo" />
          <span>MOVIES</span>
        </a>
        <a
          onClick={() => {
            Swal.fire({
              icon: "error",
              title: "Sorry",
              text: "Page is Under Construction!",
            });
          }}
        >
          <img src={seriesicon} alt="logo" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <a href="/login">
        <Login>Login</Login>
      </a>
    </Nav>
  );
};

export default Header;

const Nav = styled.div`
  height: 70px;
  /* background-color: aqua; */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 36px;
  background-color: #040714;
  z-index: 999;

  a {
    text-decoration: none;
  }
`;
const Logo = styled.div`
  width: 80px;
  padding: 0;
  img {
    display: block;
    width: 100%;
    cursor: pointer;
  }
`;
const NavMenu = styled.div`
  margin-right: auto;
  margin-left: 25px;
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  justify-content: flex-end;
  @media (max-width: 900px) {
    display: none;
  }
  a {
    display: flex;
    align-items: center;
    padding: 0px 12px;
    text-decoration: none;
    cursor: pointer;
  }
  img {
    width: 20px;
    height: 20px;
    z-index: auto;
  }
  span {
    color: rgb(249, 249, 249);
    font-size: 13px;
    letter-spacing: 1.42px;
    line-height: 1.08px;
  }
`;
const Login = styled.a`
  background-color: (0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
