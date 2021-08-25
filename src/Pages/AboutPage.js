import React from 'react';
import ImageSection from '../components/ImageSection';
import SkillsSection from '../components/SkillsSection';
import Title from '../components/Title';

function AboutPage(props) {
    return (
        <div className="AboutPage">
            <Title title={'About me'} span={'About me'}/>
            <ImageSection/>
            <Title title={'My Skils'} span={'My Skils'}/>
                <SkillsSection skill={'Java'}  width={'90%'} />
                <SkillsSection skill={'Javascript'} width={'40%'} />
                <SkillsSection skill={'React Js'}  width={'70%'} />
                <SkillsSection skill={'Node Js'}  width={'40%'} />
                <SkillsSection skill={'Express'}  width={'65%'} />
                <SkillsSection skill={'HTML5'}  width={'65%'} />
                <SkillsSection skill={'Bootstrap 4.0'}  width={'60%'} />
       </div>
    );
}

export default AboutPage;