import React, { ReactNode } from 'react';
import {about} from '../constants/about';

type Props = {
    children?: ReactNode
    title?: string
}

const About = () => (
    <div className="about">
        <div className="about__url">{about.url}</div>
        <div className="about__headline">{about.headline}</div>
        {about.paragraphs.map((item: any, index) => {
            return <div className="about__par" key={index}>
                         <h2 className="about__par--headline">{item.headline}</h2>
                         <div className="about__par--text">{item.text}</div>
                    </div>
        })}
    </div>
);

export default About;
