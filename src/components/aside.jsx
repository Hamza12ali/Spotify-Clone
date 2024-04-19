import React from "react";
import ReactDOM from 'react-dom/client';


function Aside(){
    return (
    <div className="aside-bar">
        <div className="logo">
            <h4>Spotify</h4>
        </div>
        <nav>
            <ul className="nav-links">
                <li>
                    <span><img src="#" alt="" /></span>
                    <span><a href="#">Setting</a></span>
                </li>
                <li>
                    <span><img src="#" alt="" /></span>
                    <span><a href="#">Search</a></span>
                </li>
            </ul>
        </nav>
    </div>
    )
}