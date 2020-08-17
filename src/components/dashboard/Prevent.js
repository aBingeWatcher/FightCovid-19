import React from 'react';
import AOS from 'aos';
import distance from '../../images/distance.jpg';
import touch from '../../images/touch.jpg';
import wash from '../../images/wash.jpg';
import disinfect from '../../images/disinfect.jpg';
import cover from '../../images/cover.jpg';
import home from '../../images/home.jpg';
import mask from '../../images/mask.jpg';
import './Prevent.css';

const Prevent = () => {
    AOS.init();
    return (
        <div className="container">
            <br/>
            <br/>
            <br/>
            <h1 id="head">How to Protect Yourself and Others <i class="fa fa-question" aria-hidden="true"></i> </h1>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div>
                <h1 id="sub-head"> Know how it spreads </h1>
            </div>
            <br/>
            <div>
                <div>
                    <p id="para-center"> The virus is thought to spread mainly from <b> person-to-person.</b></p>
                    <p id="para-center"> Between people who are in close contact with one another<b> (within about 6 feet).</b></p>
                </div>
                <br/>
                <div  data-aos="flip-up" data-aos-duration="1000" style={{ textAlign:"center", padding:"5px"}}>
                    <img src={distance} alt="6ft distance" height="350px" width="400px"/>
                </div>
                <br/>
                <div >
                    <p id="para-center"> Through <b> respiratory droplets </b> produced when an infected person <b>coughs, sneezes or talks. </b></p>
                    <p id="para-center"> These droplets can land in the mouths or noses of 
                        people who are nearby or<br/>possibly be inhaled into the lungs.</p>
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
            <br/>
            <br/>
            <div>
                <h1 id="head" style={{ textAlign:"left"}}> Everyone should </h1>
                <br/>
                <h1 id="sub-head" style={{ textAlign: "left"}}> Clean your hands often ------------------------------------</h1>
            </div>
            <br/>
            <div>
                <div  data-aos="fade-left"  data-aos-duration="1500" class="rules">
                    <img src={wash} alt="wash" height="320px" width="350px" />
                </div>
                <div data-aos="fade-left"  data-aos-duration="1500" class="rules">
                    <img src={touch} alt="faceTouch" height="320px" width="350px" />
                </div>
                <br/>
                <br/>
                <div >
                    <p id="para-left"> If soap and water are not readily available, <b>use a hand sanitizer that contains at
                    least 60% alcohol. </b> </p>
                    <p id="para-left">Cover all surfaces of your hands and rub them together until
                    they feel dry.</p>
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
            <br/>
            <br/>
            <div>
                <h1 id="sub-head" style={{ textAlign: "right"}}>------------------------------------- Cover coughs and sneezes</h1>
            </div>
            <br/>
            <div>
                <div data-aos="fade-right"  data-aos-duration="1500" style={{textAlign:"right"}}>
                    <img src={cover} alt="cover" height="320px" width="400px" />
                </div>
                <br/>
                <br/>
                <div >
                    <p id="para-right"> Remember to <b>always cover your mouth and nose</b> with a tissue when you
                    cough or sneeze or use the inside of your elbow. 
                    </p>
                    <p id="para-right"> Immediately wash your hands with soap and water for at least <b>20 seconds. </b> </p>

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
            <br/>
            <br/>
            <div>
                <h1 id="sub-head" style={{ textAlign: "left"}}> Avoid close contact -----------------------------------------</h1>
            </div>
            <br/>
            <div>
                <div data-aos="fade-left"  data-aos-duration="1500"style={{ textAlign:"left"}}>
                    <img src={home} alt="stayhome" height="320px" width="400px" />
                </div>
                <br/>
                <br/>
                <div >
                    <p id="para-left"> <b>Avoid close contact </b> with people who are sick.</p>
                    <p id="para-left"> Put distance between yourself and other people. </p>
                    <p id="para-left">Remember that some people without symptoms may be able to spread virus.</p>
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
            <br/>
            <br/>
            <div>
                <h1 id="sub-head" style={{ textAlign: "right"}}>----------------------------------- Cover your mouth and nose with a cloth face cover when around others </h1>
            </div>
            <br/>
            <div>
                <div data-aos="fade-right"  data-aos-duration="1500"style={{textAlign:"right"}}>
                    <img src={mask} alt="mask" height="330px" width="400px" />
                </div>
                <br/>
                <br/>
                <div >
                    <p id="para-right"><b>You could spread COVID-19 to others </b> even if you do not feel sick. 
                    </p>
                    <p id="para-right"> <b>The cloth face cover is meant to protect other people </b> in case you are infected.  </p>
                    <p id="para-right"> Do <b> NOT </b> use a facemask meant for a healthcare worker. </p>
                    <p id="para-right"> The cloth face cover is not a substitute for social distancing. </p>
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
            <br/>
            <br/>
            <div>
                <h1 id="sub-head" style={{ textAlign: "left"}}> Clean and disinfect  -----------------------------------------</h1>
            </div>
            <br/>
            <div>
                <div data-aos="fade-left"  data-aos-duration="1500" style={{ textAlign:"left"}}>
                    <img src={disinfect} alt="disinfect" height="320px" width="400px" />
                </div>
                <br/>
                <br/>
                <div >
                    <p id="para-left"> <b>If surfaces are dirty, clean them </b> <br/>  Use detergent or soap and water prior
                     to disinfection. </p>
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
            <br/>
            <br/>
        </div>
    )

}

export default Prevent;