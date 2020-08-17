import React from 'react';
import './Topbar.css';

const Topbar = () => {
    return (
        <div class="topbar">
            <div class="subnav">
                <button class="subnavbtn">India <i class="fa fa-chevron-circle-down"></i></button>
                <div class="subnav-content">
                    <a href="/news-india">News</a>
                    <a href="/indian-states"> Statewise Stats </a>
                    <a href="/india-graphs">Charts</a>
                    <a href="/india-CovidTesting"> Testing Status </a>
                </div>
            </div> 
            <div class="subnav">
                <button class="subnavbtn">Health Info <i class="fa fa-chevron-circle-down"></i></button>
                <div class="subnav-content">
                    <a href="/symptoms">Symptoms</a>
                    <a href="/prevention">Prevention</a>
                </div>
            </div> 
        </div>
    )
}

export default Topbar;