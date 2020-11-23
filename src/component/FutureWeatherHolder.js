import React, {useContext} from 'react';
import FutureWeather from './FutureWeather';
import { WeatherContext } from '../Contexts/WeatherContext';

const FutureWeatherHolder = () => {
    const {sixHours} = useContext(WeatherContext);
    const renderedFuture = sixHours.map((hour, index) => {
        if(hour.time.includes('12:00:00') ) {
            return <FutureWeather weather={hour} key={'futureweather' + index} today={false}/>
        }
    })

    const renderedTodayFuture = sixHours.map((hour, index) => {
        if(hour.time.slice(0,10) === sixHours[0].time.slice(0,10) ) {
            return <FutureWeather weather={hour} key={'futureTodayWeather' + index} today={true}/>
        }
    })
    return (
    <div style={container}>
        <div className='' style={weatherBox1} className='main-background-color-faded'>
            <p style={weatherSegment} className='main-background-color'>Today's Weather</p>
            <div style={weatherContainer}>
                {renderedTodayFuture}
            </div>
            
        </div>
        <div className='' style={weatherBox2} className='main-background-color-faded'>
            <p style={weatherSegment} className='main-background-color'>Week's Weather</p>
            <div style={weatherContainer}>
                {renderedFuture}
            </div>
            
        </div>
        
    </div>
    )
}

export default FutureWeatherHolder;

const container = {
    width: 'fit-content',
    minWidth: '280px',
    maxWidth: '60%',
    margin: 'auto',
    height: 'fit-content',
    marginTop: '20px',
    left: 0,
    right: 0,
    bottom: '5px',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    padding: '5px'
}

const weatherBox1 = {
    display: 'flex',
    height: '90px',
    width: '100%',
    margin: '8%',
    alignItems: 'flex-start',
    position: 'relative',
    paddingTop: '12px',
    paddingLeft: '8px',
    paddingRight: '8px',
    borderRadius: '8px',
}

const weatherBox2 = {
    display: 'flex',
    height: '90px',
    width: '100%',
    alignItems: 'flex-start',
    position: 'relative',
    paddingTop: '12px',
    paddingLeft: '8px',
    paddingRight: '8px',
    borderRadius: '8px',
}

const weatherContainer = {
    display: 'flex',
    height: '90px',
    width: '100%',
    marginBottom: '16px',
    borderRadius: '8px',
    alignItems: 'flex-start',
    position: 'relative',
    overflow: 'scroll',
}

const weatherSegment = {
    display: 'block',
    position: 'absolute',
    height: '18px',
    top: '-24px',
    left: '-5px',
    padding: '4px',
    fontSize: 'small'
}