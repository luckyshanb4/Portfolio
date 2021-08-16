import React from 'react';
import ImageSection from '../components/ImageSection';
import Title from '../components/Title';

function AboutPage(props) {
    return (
        <div className="AboutPage">
            <Title title={'About me'} span={'About me'}/>
            <ImageSection/>
            <Title title={'My Skils'} span={'My Skils'}/>
        </div>
    );
}

export default AboutPage;