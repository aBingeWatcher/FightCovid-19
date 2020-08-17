import React ,{useState, useEffect } from 'react';
import axios from 'axios';
import { Line, Bar, HorizontalBar, Doughnut } from 'react-chartjs-2'; 

const IndiaGraph = () => {
    const [dailyData, setDailyData] = useState([]);
    const [stateData, setStateData] = useState([]);

    useEffect( () => {
        axios
          .all([
            axios.get("https://api.covid19india.org/data.json")
          ])
          .then(responseArray => {
              setDailyData(responseArray[0].data.cases_time_series);
              setStateData(responseArray[0].data.statewise);
           })
           .catch(err => {
             console.log(err);
           })
    });

    const todayDeathsFive= stateData.filter( (stateData) => stateData.state!=="Total" && stateData.state!=="State Unassigned").map( (stateData) => ({
        state: stateData.state,
        deaths: stateData.deltadeaths,
    })).sort( (a,b) => b.deaths-a.deaths).slice(0,5);

    const todayDeathsDoughnut= (
        todayDeathsFive[0]               //to check if the first data has been fetched
        ? (
            <Doughnut
                data={{
                    labels:  todayDeathsFive.map( ( {state} ) => state) ,
                    datasets: [{
                        data: todayDeathsFive.map( ( {deaths} ) => deaths ) ,
                        backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        'coral',
                        '#2e4ead'
                        ],
                        hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        'coral',
                        '#2e4ead'
                        ]
                    }]
                }}
                options={{
                    legend:{display:true},
                    title:{ display: true, text:'Doughnut showing five states with highest number of fatalities today.'},
                    maintainAspectRatio: true
                }}
                
            />
        ): null
    );

    const topTenDeaths= stateData.filter( (stateData) => stateData.state!=="Total" && stateData.state!=="State Unassigned").map( (stateData) => ({
        state: stateData.state,
        deaths: stateData.deaths,
    })).sort( (a,b) => b.deaths-a.deaths).slice(0,10);

    const TenDeathsStates = (
        topTenDeaths[0]
        ? (
            <HorizontalBar
            data= {{
                labels: topTenDeaths.map( ( {state} ) => state ),
                datasets: [{
                    data: topTenDeaths.map( ({ deaths }) => deaths ),
                    label: 'Total Deaths',
                    backgroundColor: "blue"
                }]
            }}
            options={{
                legend:{display:true},
                title:{ display: true, text:'Bar Graph showing ten states with highest number of fatalities.'},
                maintainAspectRatio: true
            }}
            />
        ) : null
    );


    

    const topTenActive= stateData.filter( (stateData) => stateData.state!=="Total" && stateData.state!=="State Unassigned").map( (stateData) => ({
        state: stateData.state,
        active: stateData.active,
    })).sort( (a,b) => b.active-a.active).slice(0,10);

    const TenActiveStates = (
        topTenActive[0]
        ? (
            <HorizontalBar
            data= {{
                labels: topTenActive.map( ( {state} ) => state ),
                datasets: [{
                    data: topTenActive.map( ({ active }) => active ),
                    label: 'Active Cases',
                    backgroundColor: "coral"
                }]
            }}
            options={{
                legend:{display:true},
                title:{ display: true, text:'Bar Graph showing ten states with highest number of active cases.'},
                maintainAspectRatio: true
            }}
            />
        ) : null
    );


    const todayCasesFive= stateData.filter( (stateData) => stateData.state!=="Total" && stateData.state!=="State Unassigned").map( (stateData) => ({
        state: stateData.state,
        cases: stateData.deltaconfirmed,
    })).sort( (a,b) => b.cases-a.cases).slice(0,5);

    const todayCasesDoughnut= (
        todayCasesFive[0]               //to check if the first data has been fetched
        ? (
            <Doughnut
                data={{
                    labels:  todayCasesFive.map( ( {state} ) => state) ,
                    datasets: [{
                        data: todayCasesFive.map( ( {cases} ) => cases ) ,
                        backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        'coral',
                        '#2e4ead'
                        ],
                        hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        'coral',
                        '#2e4ead'
                        ]
                    }]
                }}
                options={{
                    legend:{display:true},
                    title:{ display: true, text:'Doughnut showing five states with highest number of confirmed cases today.'},
                    maintainAspectRatio: true
                }}
                
            />
        ): null
    );

    const topTenConfirmed= stateData.filter( (stateData) => stateData.state!=="Total" && stateData.state!=="State Unassigned").map( (stateData) => ({
        state: stateData.state,
        confirmed: stateData.confirmed,
    })).sort( (a,b) => b.confirmed-a.confirmed).slice(0,10);

    const modifiedDailyData= dailyData.map ( (dailyData) => ({
        confirmed: dailyData.dailyconfirmed,
        deaths: dailyData.dailydeceased,
        date: dailyData.date,
        recovered: dailyData.dailyrecovered
    }));


    const confirmedLineChart = (
        modifiedDailyData[0]               //to check if the first data has been fetched
        ? (
            <Line 
                data={{
                    labels: modifiedDailyData.map( ( {date} ) => date),
                    datasets: [{
                        data: modifiedDailyData.map( ({ confirmed }) => confirmed),
                        label: 'New Cases Today',
                        pointRadius: 2,
                        backgroundColor: "coral",
                        fill: true
                    },
                    {
                        data: modifiedDailyData.map( ({ recovered }) => recovered),
                        label: 'Cases Recovered',
                        pointRadius:2,
                        backgroundColor: "#2e4ead",
                        fill: true
                    }]
                }}
                options={{
                    legend:{display:true},
                    title:{ display: true, text:'Line Graph showing daily recovered and new cases in India.'},
                    maintainAspectRatio: true
                }}
            />
        ): null
    );

    const deathsBarChart = (
        modifiedDailyData[0]
        ? (
            <Bar
            data= {{
                labels: modifiedDailyData.map( ( {date} ) => date),
                datasets: [{
                    data: modifiedDailyData.map( ({ deaths }) => deaths ),
                    label: 'Deaths Today',
                    backgroundColor: 'blue'
                }]
                
            }}
            options={{
                legend:{display:true},
                title:{ display: true, text:'Bar Graph showing daily deaths in India.'},
                maintainAspectRatio: true
            }}
            />
        ) : null
    );

    const TenConfirmedStates = (
        topTenConfirmed[0]
        ? (
            <HorizontalBar
            data= {{
                labels: topTenConfirmed.map( ( {state} ) => state ),
                datasets: [{
                    data: topTenConfirmed.map( ({ confirmed }) => confirmed ),
                    label: 'Total Confirmed Cases',
                    backgroundColor: "coral"
                }]
            }}
            options={{
                legend:{display:true},
                title:{ display: true, text:'Bar Graph showing ten states with highest number of confirmed cases.'},
                maintainAspectRatio: true
            }}
            />
        ) : null
    );

    return (
        <div className="container">
            <br/>
            <br/>
            <h1 style={{fontWeight:"bold"}}> <i class="fa fa-line-chart"></i> Statistics for India </h1>
            <br/>
            <br/>
            <br/>
            {confirmedLineChart}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            {deathsBarChart}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            {TenConfirmedStates}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            {todayCasesDoughnut}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            {TenActiveStates}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            {TenDeathsStates}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            {todayDeathsDoughnut}
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
export default IndiaGraph;