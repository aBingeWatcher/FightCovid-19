import React, { useEffect, useState} from 'react'; //search useEffect and usestate

import Card from 'react-bootstrap/Card';  // to import react-bootstrap card component
import CardColumns from 'react-bootstrap/CardColumns'; //import cardcolumns react-bootstrap component 
import 'bootstrap/dist/css/bootstrap.min.css'; //import css for card component

import axios from 'axios'; // axios library is used for api requests
import ReactMapGl, {Marker, Popup, NavigationControl} from 'react-map-gl'; //to import map component (uber's mapbox api)

//importing all the images used
import redmarker from  '../../images/redmarker.png';
import stayhome from '../../images/stayhome.jpg';
import crowd from '../../images/crowd.jpg';
import warriors from '../../images/warriors.jpg';
import bus from '../../images/bus-spray.jpg';
import covidtest from '../../images/covid-test.jpg';



const WorldMap = () => {
  const [latest, setLatest]= useState([]);
  const [results, setResults]= useState([]);   // getting all the country information in array format hence []
  
  useEffect( () => {
    axios
      .all([
        axios.get("https://corona.lmao.ninja/v2/all"),
        axios.get("https://corona.lmao.ninja/v2/countries")
      ])
      .then(responseArray => {
          setLatest(responseArray[0].data);
          setResults(responseArray[1].data);
       })
       .catch(err => {
         console.log(err);
       })
  });

  const date= new Date( parseInt(latest.updated));  //to convert date from msec
  const lastUpdated= date.toString();
 
  // starting variables of map
  const [viewport, setViewport]= useState({
    width: "93%",
    height: "90vh",
    latitude: 30,
    longitude: 10,
    zoom: 1.5
  });

  const [selectedCountry, setSelectedCountry]= useState(null); //will begin as null, because at first nothing is selected
  

  return (
    <div id="map">
      <br/>
      <br/>
      <h1 style={{fontWeight:"bold"}}><i class="fa fa-globe" aria-hidden="true"></i> Map of Cases </h1>
      <ReactMapGl 
        style= {{margin:"40px 40px 2px" }}
        {...viewport} 
        mapStyle="mapbox://styles/mapbox/dark-v10"
        mapboxApiAccessToken= "pk.eyJ1IjoibW9tb2ppdCIsImEiOiJja2MzdjdoczcwMXJuMnNvMGRoaXBtdGJuIn0.B3XsbnIn2kLjzP640ZBHWg"
        onViewportChange= { viewport => {
          setViewport(viewport);     //when map loc is changed by user,new location becomes the new state 
        }}
         
      >
          <div style={{position: 'absolute', right:"5px",top:"5px", padding:"2px", zIndex:"3"}}>
            <NavigationControl />
          </div>
         {results.map( (data) => (
           <Marker
           //key={data.countryInfo._id}
           latitude={data.countryInfo.lat} 
           longitude= {data.countryInfo.long}
           >
             <div onClick={ (e) => {
               e.preventDefault();

               setSelectedCountry(data);
             }}> 
                <img src={redmarker} alt="marker" width="30px" height="30px"   />
             </div>
           </Marker>
         ))}
         {selectedCountry ? (
           <Popup
           latitude={selectedCountry.countryInfo.lat} 
           longitude={selectedCountry.countryInfo.long}
           onClose={ () => {
             setSelectedCountry(null);
           }}

           >
             <div className="container" style={{ backgroundColor:"cyan"}} >
                <br/>
                <img style={{ border:"3px solid black", margin:"auto"}} src={selectedCountry.countryInfo.flag} alt="Flag" width="150px" height="110px" />
                <h1 style={{color:"grey",fontWeight:"bold",fontSize:"40px", textAlign:"right"}}>{selectedCountry.country} </h1>
                <p style={{textAlign:"right"}}>Total Cases:<span style={{ fontWeight:"bold", fontSize:"20px"}}> {selectedCountry.cases} </span> </p>
                <p style={{textAlign:"right"}}>Total Deaths:<span style={{ fontWeight:"bold", fontSize:"20px"}}> {selectedCountry.deaths} </span> </p>
                <p style={{textAlign:"right"}}>Total Recovered:<span style={{ fontWeight:"bold", fontSize:"20px"}}> {selectedCountry.recovered}</span> </p>
                <p style={{textAlign:"right"}}>New Cases Today:<span style={{ fontWeight:"bold", fontSize:"20px"}}> {selectedCountry.todayCases}</span> </p>
                <p style={{textAlign:"right"}}>Cases per 1 million:<span style={{ fontWeight:"bold", fontSize:"20px"}}> {selectedCountry.casesPerOneMillion}</span> </p>
                <p style={{textAlign:"right"}}>Deaths per 1 million:<span style={{ fontWeight:"bold", fontSize:"20px"}}> {selectedCountry.deathsPerOneMillion}</span> </p>
                <br/>
             </div>
            </Popup>
          ):null};
      </ReactMapGl>
      <div style={{backgroundColor:"black",color:"grey"}}>
        <h2 style={{fontSize:"20px", color:"white", padding:"2px", textAlign:"center" }}>Click on your country marker to get live updates.</h2>
      </div>
      <br/>
      <br/>
      <div class="container">
        <CardColumns>
          <Card className="text-center">
            <Card.Img variant="top" src={covidtest} />
            <Card.Body>
              <Card.Title style={{fontWeight: "bold", color: "grey"}}>Total Cases</Card.Title>
              <Card.Text style={{ fontWeight:"bold", fontSize:"50px"}}>
                {latest.cases}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="text-center">
            <Card.Body>
              <Card.Title style={{fontWeight: "bold", color: "grey"}}>New Cases Today</Card.Title>
              <Card.Text style={{ fontWeight:"bold", fontSize:"50px"}}>
                {latest.todayCases}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated {lastUpdated} </small>
            </Card.Footer>
          </Card>
          <Card className="text-center">
            <Card.Img variant="top" src={stayhome} />
            <Card.Body>
              <Card.Title style={{fontWeight: "bold", color: "grey"}}>Total Deaths</Card.Title>
              <Card.Text style={{ fontWeight:"bold", fontSize:"50px"}}>
                {latest.deaths}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="p-3" bg="dark" text="white">
            <blockquote className="blockquote mb-0 card-body">
              <p>
                 “All the adversity I’ve had in my life, all my troubles and obstacles, have strengthened me. 
                 You may not realize it when it happens, but a kick in the teeth may be the best thing in the
                 world for you.”
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Walt Disney
                </small>
              </footer>
            </blockquote>
          </Card>
          <Card className="text-center">
            <Card.Img variant="top" src={warriors} />
            <Card.Body>
              <Card.Title style={{fontWeight: "bold", color: "grey"}}>Total Recovered</Card.Title>
              <Card.Text style={{ fontWeight:"bold", fontSize:"50px"}}>
                {latest.recovered}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img src={crowd} />
          </Card>
          <Card>
            <Card.Body>
              <Card.Title style={{fontWeight:"bold", color:"gray"}}> Overview </Card.Title>
              <Card.Text>
                Coronavirus disease is an infectious disease caused by a newly discovered coronavirus.
                The best way to prevent and slow down transmission is be well informed about
                the COVID-19 virus, the disease it causes and how it spreads.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="text-center">
            <Card.Img variant="top" src={bus} />
            <Card.Body>
              <Card.Title style={{fontWeight: "bold", color: "grey"}}> Deaths Today</Card.Title>
              <Card.Text style={{ fontWeight:"bold", fontSize:"50px"}}>
                {latest.todayDeaths}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated {lastUpdated} </small>
            </Card.Footer>
          </Card>
          <Card className="text-center">
            <Card.Body>
              <Card.Title style={{fontWeight: "bold", color: "grey"}}>Countries Affected</Card.Title>
              <Card.Text style={{ fontWeight:"bold", fontSize:"50px"}}>
                {latest.affectedCountries}
              </Card.Text>
            </Card.Body>
          </Card>
        </CardColumns>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </div>
  );
}

export default WorldMap;
