import React ,{useState, useEffect } from 'react';
import axios from 'axios';
import { Line, Bar, HorizontalBar, Doughnut } from 'react-chartjs-2'; 



const  PlotGraph = () => {
    const [dailyData, setDailyData] = useState([]);
    const [countryData, setCountryData]= useState([]);

    useEffect( () => {
        axios
            .all([
            axios.get("https://covid19.mathdro.id/api/daily"),
            axios.get("https://corona.lmao.ninja/v2/countries")
            ])
            .then(responseArray => {
                setDailyData(responseArray[0].data);  
                setCountryData(responseArray[1].data);
            })
            .catch(err => {
                console.log(err);
            })
    });
    
    const topTenCases= countryData.map( (countryData) => ({
        country: countryData.country,
        cases: countryData.cases,
    })).sort( (a,b) => b.cases-a.cases).slice(0,10);

    const topTenDeaths= countryData.map( (countryData) => ({
        country: countryData.country,
        deaths: countryData.deaths,
    })).sort( (a,b) => b.deaths-a.deaths).slice(0,10);

    const topTenActive= countryData.map( (countryData) => ({
        country: countryData.country,
        active: countryData.active,
    })).sort( (a,b) => b.active-a.active).slice(0,10);
    
    const TopTenActive = (
        countryData[0]
        ? (
            <HorizontalBar
            data= {{
                labels: topTenActive.map( ( {country} ) => country ),
                datasets: [{
                    data: topTenActive.map( ({ active }) => active ),
                    label: 'Total active cases',
                    backgroundColor: "coral"
                }]
            }}
            options={{
                legend:{display:true},
                title:{ display: true, text:'Bar Graph showing ten countries with highest number of active cases'},
                maintainAspectRatio: true
            }}
            />
        ) : null
    );



    const modifiedData= dailyData.map ( (dailyData) => ({
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        date: dailyData.reportDate,
        dailyInfected: dailyData.deltaConfirmed
    }));

    const todayCasesFive= countryData.map( (countryData) => ({
        country: countryData.country,
        cases: countryData.todayCases,
    })).sort( (a,b) => b.cases-a.cases).slice(0,5);
    

    const todayActive= (
        todayCasesFive[0]               //to check if the first data has been fetched
        ? (
            <Doughnut
                data={{
                    labels:  todayCasesFive.map( ( {country} ) => country) ,
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
                    title:{ display: true, text:'Doughnut showing five countries with highest number of confirmed cases today'},
                    maintainAspectRatio: true
                }}
                
            />
        ): null
    );


    const todayDeathsFive= countryData.map( (countryData) => ({
        country: countryData.country,
        deaths: countryData.todayDeaths,
    })).sort( (a,b) => b.deaths-a.deaths).slice(0,5);
    

    const todayDeaths= (
        todayDeathsFive[0]               //to check if the first data has been fetched
        ? (
            <Doughnut
                data={{
                    labels:  todayDeathsFive.map( ( {country} ) => country) ,
                    datasets: [{
                        data: todayDeathsFive.map( ( {deaths} ) => deaths ) ,
                        backgroundColor: [
                        '#2e4ead',
                        '#36A2EB',
                        'coral',
                        '#FFCE56',
                        '#FF6384'
                        ],
                        hoverBackgroundColor: [
                        '#2e4ead',
                        '#36A2EB',
                        '#coral',
                        '#FFCE56',
                        '#FF6384'
                        ]
                    }]
                }}
                options={{
                    legend:{display:true},
                    title:{ display: true, text:'Doughnut showing five countries with highest number of fatalities today'},
                    maintainAspectRatio: true
                }}
                
            />
        ): null
    );


    const lineChart = (
        dailyData[0]               //to check if the first data has been fetched
        ? (
            <Line 
                data={{
                    labels: modifiedData.map( ( {date} ) => date),
                    datasets: [{
                        data: modifiedData.map( ({ confirmed }) => confirmed),
                        label: 'Total cases',
                        pointRadius: 4,
                        backgroundColor: "coral",
                        fill: true
                    }, {
                        data: modifiedData.map( ({ deaths }) => deaths),
                        label: 'Total deaths',
                        pointRadius:5,
                        backgroundColor: "#2e4ead",
                        fill: true
                    }]
                }}
                options={{
                    legend:{display:true},
                    title:{ display: true, text:'Line Graph showing total cases and deaths (Worldwide)'},
                    maintainAspectRatio: true
                }}
            />
        ): null
    );

    const barChart = (
        dailyData[0]
        ? (
            <Bar
            data= {{
                labels: modifiedData.map( ( {date} ) => date),
                datasets: [{
                    data: modifiedData.map( ({ dailyInfected }) => dailyInfected ),
                    label: 'New cases',
                    backgroundColor: 'blue'
                }]
                
            }}
            options={{
                legend:{display:true},
                title:{ display: true, text:'Bar Graph showing daily new cases (Worldwide)'},
                maintainAspectRatio: true
            }}
            />
        ) : null
    );
    
    const TopTenCountry = (
        countryData[0]
        ? (
            <HorizontalBar
            data= {{
                labels: topTenCases.map( ( {country} ) => country ),
                datasets: [{
                    data: topTenCases.map( ({ cases }) => cases ),
                    label: 'Total Confirmed Cases',
                    backgroundColor: "coral"
                }]
            }}
            options={{
                legend:{display:true},
                title:{ display: true, text:'Bar Graph showing ten countries with highest number of confirmed cases'},
                maintainAspectRatio: true
            }}
            />
        ) : null
    );


    const TopTenDeaths = (
        countryData[0]
        ? (
            <HorizontalBar
            data= {{
                labels: topTenDeaths.map( ( {country} ) => country ),
                datasets: [{
                    data: topTenDeaths.map( ({ deaths }) => deaths ),
                    label: 'Total Deaths',
                    backgroundColor: "blue"
                }]
            }}
            options={{
                legend:{display:true},
                title:{ display: true, text:'Bar Graph showing ten countries with highest number of fatalities'},
                maintainAspectRatio: true
            }}
            />
        ) : null
    );

    return (
        <div className="container">
            <br/>
            <br/>
            <h1 style={{fontWeight:"bold"}}> <i class="fa fa-line-chart"></i> World Statistics </h1>
            <br/>
            <br/>
            {todayActive}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            {lineChart}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            {barChart}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            {TopTenCountry}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            {todayDeaths}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            {TopTenActive}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            {TopTenDeaths}
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

export default PlotGraph;