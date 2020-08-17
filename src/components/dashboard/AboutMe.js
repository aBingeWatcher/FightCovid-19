import React from 'react';
import me from '../../images/me.jpg';
import './AboutMe.css';

const AboutMe = () => {
    return(
        <div>
            <br/>
            <br/>
            <h1 style={{fontWeight:"bold",color:"indigo"}}> About Me   ------------------------ </h1>
            <br/>
            <br/>
            <br/>
            <div class="user">
                <img src={me} alt="Me" class="image" />
                <div class="overlay">
                    <div class="text"> 
                       <h5>Click Here <i class="fa fa-hand-o-down" aria-hidden="true"></i></h5>
                       <a style={{fontSize:"100px"}} href=" https://www.linkedin.com/in/momojit-ghosh-405630169"><i class="fa fa-linkedin-square" aria-hidden="true"></i> </a>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default AboutMe;