import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ImageHolder from '../component/ImageHolder';
import MiniWeather from '../component/MiniWeather';
import Search from '../component/Search';

import fall from '../default-img/melonta_kauppatori_Maija_Astikainen-3.jpg';
import spring from '../default-img/Lammassaari_island_Jussi+Hellsten.jpg';
import summer from '../default-img/Finland_Helsinki_Vallisaari_highres_byJuliaKivela_9868.jpg';
import winter from '../default-img/DSC02570.jpg';
import garden from '../default-img/myhelsinki_Aarteenetsijänpuisto_0406_20200915.jpg';

import './landing-page.css';
import { SportsContext } from '../Contexts/SportsContexts';
import { WeatherContext } from '../Contexts/WeatherContext';

const LandingPage = (props) => {
    const { updateSports } = useContext(SportsContext);
    const { updateWeather } = useContext(WeatherContext);
    const history = useHistory()

    useEffect(() => {
        updateSports();
        updateWeather();
    }, []);

    const searchClicked = () => {
        history.push('/result');
    }

    return (
        <div className='landing-page'>  
            <ImageHolder images = {[spring, summer, fall, winter, garden]} />
            <div style={{position:'absolute', height:'73%', bottom: '0'}}>
                <h2>Discover Helsinki Outdoor Sports</h2>  
                <Search onTermChange = {props.onTermChange} onSubmit = {searchClicked} />
                <MiniWeather />
            </div>
        </div>
        
    )
}

export default LandingPage;

/*<div>Sample box for search results
    <ul>
        {Object.keys(sorted).map(e => sorted[e].data.map(d =>
            <li>{d.name_en || d.name_fi || 'No name'}</li>))}                     
    </ul>
</div>*/