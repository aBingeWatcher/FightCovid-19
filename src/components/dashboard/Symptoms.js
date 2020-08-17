import React from 'react';
import './Symptoms.css';
import AOS from 'aos';  //animate on scroll library


// importing images for the component
import fever from '../../images/fever.jpg';
import ache from '../../images/ache.jpg';
import breath from '../../images/breath.jpg';
import congestion from '../../images/congestion.jpg';
import cough from '../../images/cough.jpg';
import diarrhea from '../../images/diarrhea.jpg';
import fatigue from '../../images/fatigue.jpg';
import headache from '../../images/headache.jpg';
import nausea from '../../images/nausea.jpg';
import sorethroat from '../../images/sorethroat.jpg';
import tasteloss from '../../images/tasteloss.jpg';



const Symptoms= () => {
    AOS.init();
    return (
        <div className="container">
            <br/>
            <br/>
            <div  >
                <h1 id="head"><i class="fa fa-stethoscope" aria-hidden="true"> </i>  Symptoms of Coronavirus </h1>
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
            <div data-aos="flip-up" data-aos-duration="1500">
                <p class="para"> COVID-19 affects different people in different ways. </p>
                <p class="para"> Most infected people will develop mild to moderate illness and recover without hospitalization.</p>
                <br/>
                <p class="para"> On average it takes <b> 5–6 days </b> from when someone is infected with the virus for symptoms to show, however it can take <b>up to 14 days.</b> </p>
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
            <h5 style={{ textAlign:"center", fontWeight:"bold", color:"indigo", fontSize:"30px"}} > Most common symptoms </h5>
            <br/>
            <div data-aos="fade-up-right" data-aos-duration="1500">
                <div class="gallery">
                    <img  src={fever} alt="fever" width="330px" height="320px" />
                </div>
                <div class="gallery">
                    <img  src={cough} alt="cough" width="330px" height="320px" />
                </div>
                <div class="gallery" >
                    <img  src={breath} alt="breath" width="330px" height="320px" />
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
            <br/>
            <div data-aos="fade-up-left" data-aos-duration="1500">
                <p class="para"> Seek immediate medical attention if you have serious symptoms. <b> Always call </b> before visiting your doctor or health facility.</p>
                <br/>
                <p class="para"> People with mild symptoms who are otherwise healthy should manage their symptoms at home.</p>
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
            <br/>
            <h5 style={{ textAlign:"center", fontWeight:"bold", color:"indigo", fontSize:"30px"}} > Less common symptoms </h5>
            <br/>
            <div data-aos="zoom-in" data-aos-duration="2000">
                <div class="gallery">
                    <img src={congestion} alt="congestion" width="251px" height="280px" />
                </div>
                <div class="gallery">
                    <img src={ache} alt="ache" width="251px" height="280px" />
                </div>
                <div class="gallery">
                    <img src={diarrhea} alt="diarrhea" width="251px" height="280px" />
                </div>
                <div class="gallery">
                    <img src={nausea} alt="nausea" width="251px" height="280px" />
                </div>
                <div class="gallery">
                    <img src={sorethroat} alt="sorethroat" width="251px" height="280px" />
                </div>
                <div class="gallery">
                    <img src={tasteloss} alt="tasteloss" width="251px" height="280px" />
                </div>
                <div class="gallery" > 
                    <img src={fatigue} alt="fatigue" width="251px" height="280px" />
                </div>
                <div class="gallery">
                    <img  src={headache} alt="headache" width="251px" height="280px" />
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
            <br/>
            <div data-aos="flip-down" data-aos-duration="1500">
                <p class="para"> <b> Older adults and people who have severe underlying medical conditions </b> like heart or lung disease or diabetes seem to be at <b>higher risk </b> for developing more serious complications from COVID-19 illness.</p>
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
        </div>
    )
}

            

export default Symptoms;