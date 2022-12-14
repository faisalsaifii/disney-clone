import React from 'react'
import styled from 'styled-components'
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";
import logoIcon from "../images/logo.svg";
import homeIcon from "../images/home-icon.svg";
import watchlistIcon from "../images/watchlist-icon.svg";
import movieIcon from "../images/movie-icon.svg";
import searchIcon from "../images/search-icon.svg";
import originalsIcon from "../images/original-icon.svg";
import seriesIcon from "../images/series-icon.svg";

const firebaseConfig = {
    apiKey: "AIzaSyBx7SUFdwC4kdSqDVJ_SQLF4OcEuJwJItQ",
    authDomain: "disney-clone-16168.firebaseapp.com",
    projectId: "disney-clone-16168",
    storageBucket: "disney-clone-16168.appspot.com",
    messagingSenderId: "973506288787",
    appId: "1:973506288787:web:dd41c3e2321e7a2d834166",
    measurementId: "G-00G6NSL44E"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage();

const Header = (props) => {

    const handleSignIn = () => {
        signInWithPopup(auth, provider)
    }

  return (
    <Nav>
            <Logo>
                <img src = {logoIcon} alt="Disney+"/>
            </Logo>
        <NavMenu>
            <a href='/disney-clone/home'>
                <img src={homeIcon} alt='home'/>
                <span>
                    HOME
                </span>
            </a>
            <a href='/disney-clone/search'>
                <img src={searchIcon} alt='search'/>
                <span>
                    SEARCH
                </span>
            </a>
            <a href='/disney-clone/watchlist'>
                <img src={watchlistIcon} alt='watchlist'/>
                <span>
                    WATCHLIST
                </span>
            </a>
            <a href='/disney-clone/originals'>
                <img src={originalsIcon} alt='originals'/>
                <span>
                    ORIGINALS
                </span>
            </a>
            <a href='/disney-clone/movies'>
                <img src={movieIcon} alt='movies'/>
                <span>
                    MOVIES
                </span>
            </a>
            <a href='/disney-clone/series'>
                <img src={seriesIcon} alt='series'/>
                <span>
                    SERIES
                </span>
            </a>
        </NavMenu>
        <Login
            onClick={handleSignIn}
        >Login</Login>
    </Nav>
  )
}
const Login = styled.a`
    background-color: rgba(0,0,0,0.2);
    border-radius: 4px;
    border: 1px solid #f9f9f9;
    letter-spacing: 1.5px;
    padding: 10px 16px;
    text-transform: uppercase;
    transition: all 0.2s ease 0s;
    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
        cursor: pointer;
    }
`;
const NavMenu = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;

        img {
            height: 20px;
            width: 20px;
            min-width: 20px;
            z-index: auto;
        }

        span {
            color: rgb(249,249,249);
            font-size: 13px;
            letter-spacing: 1.42px;
            line-height: 1.00;
            padding: 2px 0px;
            white-space: nowrap;
            position: relative;
            
            &:before {
                background-color: rgb(249,249,249);
                border-radius: 0px 0px 4px 4px;
                bottom: -6px;
                content: "";
                height: 2px;
                left: 0px;
                opacity: 0;
                position: absolute;
                right: 0px;
                transform-origin: left-center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
                width: auto;
            }
        }
        &:hover {
            span:before {
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
           }
        }
    }

    

    @media (max-width: 768px) {
        display: none;
    }
`;

const Logo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;
    image {
        display: block;
        width: 100%;
    }
`;

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`;

export default Header