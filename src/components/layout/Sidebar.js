import React from 'react';
import '../../App.css';


const Sidebar= () => {
    return (
        <div class="sidebar" id="mySidebar">
            <button type="button" id="cross" class="closebtn"> <i class="fa fa-times" aria-hidden="true"></i> </button>
            <ul>
                <li><a href='#/'>
                    <span class="icon"><i class="fa fa-home"></i></span>
                    <span class="title">Home</span></a></li>
                <li><a href='#/world-stats'>
                    <span class="icon"><i class="fa fa-line-chart"></i></span>
                    <span class="title">World Statistics</span>
                </a></li>
                <li><a href="/world-news">
                    <span class="icon"><i class="fa fa-newspaper-o"></i></span>
                    <span class="title">World News</span>
                </a></li>
                <li><a href="/self-test">
                    <span class="icon"><i class="fa fa-thermometer-half"></i></span>
                    <span class="title">Self Diagnosis </span>
                </a></li>
                <li><a href="https://www.pmcares.gov.in/en/">
                    <span class="icon"><i class="fa fa-money"></i></span>
                    <span class="title">Donate Funds </span>
                </a></li>
            </ul>
       </div>
    )
}

export default Sidebar;