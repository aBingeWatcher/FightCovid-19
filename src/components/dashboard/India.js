import React , { useState, useEffect } from 'react';
import axios from 'axios';
import modi from '../../images/modi.jpg';
import healthofficial from '../../images/healthofficial.jpg';
import migrant from '../../images/migrant.jpg';

const India = () => {
    const [stateData, setStateData] = useState([]);
    const [totalData, setTotalData] = useState([]);

    useEffect( () => {
        axios
          .all([
            axios.get("https://api.covid19india.org/data.json")
          ])
          .then(responseArray => {
              setStateData(responseArray[0].data.statewise);
              setTotalData(responseArray[0].data.statewise[0]);
           })
           .catch(err => {
             console.log(err);
           })
    });

    const tableData= stateData.filter( (stateData) => stateData.state!=="Total" && stateData.state!=="State Unassigned").map( (stateData,i) => 
      <tr key={i}> 
        <td> {stateData.state} </td>
        <td> {stateData.confirmed} </td>
        <td> {stateData.active} </td>
        <td> {stateData.deaths} </td>
        <td> {stateData.recovered} </td>
        <td> {stateData.lastupdatedtime} </td>
      </tr>
    )

    return (
      <div> 
        <br/>
        <br/>
        <h1 style={{fontWeight:"bold"}}><i class="fa fa-table" aria-hidden="true"></i>  Statewise Statistics </h1> 
        <br/>
        <br/>
        <br/>
        <div class="card-group">
          <div class="card">
            <img class="card-img-top" src={modi} alt="PM Modi" style={{height:"275px"}} />
            <div class="card-body">
              <h5 class="card-title">Total Cases</h5>
              <p class="card-text" style={{fontWeight:"bold", fontSize:"30px"}} > {totalData.confirmed} </p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={migrant} alt="Migrant"  style={{height:"275px"}} />
            <div class="card-body">
              <h5 class="card-title">Total Deaths</h5>
              <p class="card-text" style={{fontWeight:"bold", fontSize:"30px"}} >{totalData.deaths} </p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={healthofficial} alt="Health Officials" style={{height:"275px"}}/>
            <div class="card-body">
              <h5 class="card-title">Active Cases</h5>
              <p class="card-text" style={{fontWeight:"bold", fontSize:"30px"}} >{totalData.active}</p>
            </div>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div className="table-responsive">
          <table className="table-bordered striped centered" style={{ margin:"auto", border:"3px solid black", color:"indigo"}}>
            <thead>
              <tr>
                <th>State</th>
                <th>Total Confirmed</th>
                <th>Active</th>
                <th> Deaths</th>
                <th>Recovered</th>
                <th>Last Updated</th>
              </tr>
            </thead>
            <tbody>
              {tableData}
            </tbody>
          </table>
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

export default India;
