// BetHeader.js
import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from 'react-router-dom'
import Marquee from 'react-fast-marquee';
import Logo from "../../../Assets/1Xbet_logo.png";
import SearchIcon from '@mui/icons-material/Search';
import "./Search.css";
import DropdownId from "./Dropdown";

export const BetHeader = () => {
    return (
        <>
            <div className="main-header">
                <img className="main-header-img" alt="logo" src={Logo} />

                <div className='right-section-header'>
                    <div className="main-header-right">
                        <div className="search-box">
                            <button className="btn-search"><SearchIcon style={{ fontSize: "1.8rem", fontWeight: 900 }} /></button>
                            <input type="text" className="input-search" placeholder="Type to Search..." />
                        </div>
                        <div className="bal-container">
                            <h5>Rules</h5>
                            <div className="balances">
                                <h5>Balance:<span>567.87</span></h5>
                                <h4>Exposure:0</h4>
                            </div>
                            <DropdownId />
                        </div>
                    </div>
                    <Marquee style={{ color: "white",fontFamily:"sans-serif" }}>
                        I can be a React component, multiple React components, or just some text.
                    </Marquee>
                </div>
            </div>

            <div className="game-option">
                <div className="nav-link"><NavLink to="/diamondexchange/" className="navLink"> HOME</NavLink></div>
                <div className="nav-link"><NavLink to="/diamondexchange/PSL" className="navLink">PSL 2024 </NavLink></div>
                <div className="nav-link"><NavLink to="/diamondexchange/WPL" className="navLink">WIPL 2024 </NavLink></div>
                <div className="nav-link"><NavLink to="/diamondexchange/IPL" className="navLink">IPL 2024 </NavLink></div>
                <div className="nav-link"><NavLink to="/diamondexchange/CRICKET" className="navLink">CRICKET </NavLink></div>
                <div className="nav-link"><NavLink to="/diamondexchange/TENNIS" className="navLink">TENNIS </NavLink></div>
                <div className="nav-link"><NavLink to="/diamondexchange/FOOTBALL" className="navLink">FOOTBALL </NavLink></div>
                <div className="nav-link"><NavLink to="/diamondexchange/KABADDI" className="navLink">KABADDI </NavLink></div>
                <div className="nav-link"><NavLink to="/diamondexchange/live-teen-patti" className="navLink">LIVE TEEN PATTI </NavLink></div>
                <div className="nav-link"><NavLink to="/diamondexchange/live-poker" className="navLink">LIVE POKER </NavLink></div>
                <div className="nav-link"><NavLink to="/diamondexchange/lucky-7" className="navLink">LUCKY 7 </NavLink></div>
            </div>
        </>
    );
};
