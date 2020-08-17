import React ,{useState, useEffect } from 'react';
import axios from 'axios';
import { Line, Bar} from 'react-chartjs-2'; 
import lab from '../../images/lab.jpg';
import booth from '../../images/booth.jpg';

const Testing = () => {
    const [testData, setTestData] = useState([]);
    const [finalData, setFinalData] = useState([]);

    useEffect( () => {
        axios
          .all([
            axios.get("https://api.covid19india.org/data.json")
          ])
          .then(responseArray => {
              setTestData(responseArray[0].data.tested);
              setFinalData(responseArray[0].data.tested[responseArray[0].data.tested.length-1]);
           })
           .catch(err => {
             console.log(err);
           })
    });

    const testingData= testData.map ( (testData) => ({
        date: testData.testedasof,
        totalTest: testData.totalsamplestested,
        dailyTest: testData.samplereportedtoday
    }));

    const LineChart = (
        testingData[0]               //to check if the first data has been fetched
        ? (
            <Line 
                data={{
                    labels: testingData.map( ( {date} ) => date),
                    datasets: [{
                        data: testingData.map( ({ totalTest }) => totalTest),
                        label: 'Total samples tested',
                        pointRadius: 3,
                        backgroundColor: "coral",
                        fill: true
                    }]
                }}
                options={{
                    legend:{display:true},
                    title:{ display: true, text:'Line Graph showing total Covid-19 samples tested in India.'},
                    maintainAspectRatio: true
                }}
            />
        ): null
    );

    const BarChart = (
        testingData[0]
        ? (
            <Bar
            data= {{
                labels: testingData.map( ( {date} ) => date),
                datasets: [{
                    data: testingData.map( ({ dailyTest }) => dailyTest ),
                    label: 'Samples tested today',
                    backgroundColor: 'blue'
                }]
                
            }}
            options={{
                legend:{display:true},
                title:{ display: true, text:'Bar Graph showing number of samples tested daily in India.'},
                maintainAspectRatio: true
            }}
            />
        ) : null
    );

    return (
        <div className="container">
            <br/>
            <br/>
            <h1 style={{fontWeight:"bold"}}> <i class="fa fa-users"></i> Testing Status </h1>
            <br/>
            <br/>
            <br/>
            <div class="card-deck">
                <div class="card">
                    <img class="card-img-top" src={lab} alt="lab" style={{height:"275px"}} />
                    <div class="card-body">
                        <h5 class="card-title">Total samples tested in India</h5>
                        <p class="card-text" style={{fontWeight:"bold", fontSize:"35px"}} > {finalData.totalsamplestested} </p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated on {finalData.testedasof} </small>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src={booth} alt="booth"  style={{height:"275px"}} />
                    <div class="card-body">
                        <h5 class="card-title">Samples tested today</h5>
                        <p class="card-text" style={{fontWeight:"bold", fontSize:"35px"}} >{finalData.samplereportedtoday} </p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated on {finalData.testedasof} </small>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            {LineChart}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            {BarChart}
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

export default Testing;
