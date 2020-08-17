import React, {Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';
import {showResult} from './result';


class SelfTest extends Component {
    
    state = {
        age:"",
        temp:"",
        cough:"",
        breathing:"",
        tired:""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        showResult();
    } 

    render () {

        let TestResult;
        if ( Number(this.state.temp) >= 100 && (this.state.tired === "Yes" || this.state.cough === "Yes" || this.state.breathing==="Little difficulty" || this.state.breathing==="Severe difficulty") ) {
            TestResult = <div id="res" style={{ backgroundColor:"red", color:"white", display: "none", textAlign:"center", padding:"2px" }}> <b><i class="fa fa-exclamation-circle" aria-hidden="true"></i> You may have positive symptoms. Get in touch with your doctor. </b> </div>;
        } else if( (this.state.cough ==="Yes" ) &&  ( this.state.breathing==="Little difficulty" || this.state.breathing==="Severe difficulty" || this.state.tired==="Yes") ) {
            TestResult = <div id="res" style={{ backgroundColor:"red", color:"white", display: "none", textAlign:"center" , padding:"2px" }}> <b><i class="fa fa-exclamation-circle" aria-hidden="true"></i> You may have positive symptoms. Get in touch with your doctor. </b> </div>;
        } else if( (this.state.cough ==="Yes" || this.state.tired === "Yes" ) &&  ( this.state.breathing==="Little difficulty" || this.state.breathing==="Severe difficulty") ) {
            TestResult = <div id="res" style={{ backgroundColor:"red", color:"white", display: "none", textAlign:"center", padding:"2px"  }}> <b><i class="fa fa-exclamation-circle" aria-hidden="true"></i> You may have positive symptoms. Get in touch with your doctor. </b></div>;
        } else {
            TestResult = <div id="res" style={{backgroundColor:"yellow", color:"black", display:"none", textAlign:"center", padding:"2px"}}> <b><i class="fa fa-exclamation-circle" aria-hidden="true"></i> Your infection risk is low. Stay at home to avoid any chance of exposure. </b> </div>;
        }
        return (
            <div className="container">
                <br/>
                <br/>
                <h1 style={{fontWeight:"bold"}}><i class="fa fa-thermometer-half"></i> COVID‑19 Self-Assessment </h1>
                <br/>
                <br/>
                <Jumbotron>
                    <h1>Hello, User!</h1>
                    <br/>
                    <p  style={{ textAlign:"left", fontSize:"20px" }}>
                        <b>Disclaimer: </b>This test is not at all accurate. The purpose of this test is only to help 
                        you make decisions about seeking appropriate medical care. 
                        <b> DO NOT </b> panic based on the results, consult to your nearest
                        health center If you feel 
                        any of the symptoms are persistent.
                        Also, We do not store any personal data during the session.
                    </p>
                </Jumbotron>
                <br/>
                <br/>
                <form onSubmit={this.handleSubmit}  className="white" style={{ width:"60%"}}>
                    <br/>
                    <h5 style={{ fontWeight:"bold", fontSize:"30px", marginLeft:"20px"}}>Enter your details <i class="fa fa-pencil" aria-hidden="true"></i> </h5>
                    <br/>
                    <div>
                        <label htmlFor="age" style={{ marginLeft:"10px"}}> Enter your age </label>
                        <input type="text" id="age" onChange={this.handleChange}   required />
                    </div>
                    <div>
                        <label htmlFor="temp" style={{ marginLeft:"10px"}}> Enter your temperature (in Fahrenheit ) </label>
                        <input type="text" id="temp" onChange={this.handleChange} required />
                    </div>
                    <div>
                        <label style={{ marginLeft:"10px"}}> Difficulty in breathing </label>
                        <input list="list1" id="breathing" onChange={this.handleChange} required />
                        <datalist id="list1" >
                            <option value="No difficulty"  />
                            <option value="Little difficulty" />
                            <option value="Severe difficulty" />
                        </datalist>
                    </div>
                    <div>
                        <label style={{ marginLeft:"10px"}}> Dry Cough </label>
                        <input list="list2" id="cough" onChange={this.handleChange} required />
                        <datalist id="list2" >
                            <option value="No"  />
                            <option value="Yes" />
                        </datalist>
                    </div>
                    <div>
                        <label style={{ marginLeft:"10px"}}> Feeling tired </label>
                        <input list="list3" id="tired" onChange={this.handleChange} required />
                        <datalist id="list3" >
                            <option value="No" />
                            <option value="Yes" />
                        </datalist>
                    </div>
                    <br/>
                    <button  className="btn red darken-1"  style={{ marginLeft:"20px", marginBottom:"20px" }}> Submit </button>
                </form>
                <br/>
                {TestResult}
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
}

export default SelfTest;