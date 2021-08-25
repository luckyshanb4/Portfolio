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
                <SkillsSection skill={'Javascript'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Typescript'} progress={'30%'} width={'30%'} />
                <SkillsSection skill={'React Js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Node Js'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Python'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Lua'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'Java'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Web Design'} progress={'25%'} width={'25%'} />
                <SkillsSection skill={'UI/Ux Design'} progress={'76%'} width={'76%'} />
       </div>
    );
}

export default AboutPage;