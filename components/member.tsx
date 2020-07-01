import React from 'react';
import 'lazysizes';

type Props = {
    imgSrc: string,
    firstname: string,
    lastname: string,
    role: string
}

const Member = ({imgSrc, firstname, lastname, role}: Props) => (
    <div className="member">
        <div><img data-src={`${imgSrc}?img=${firstname}`} alt="" className="lazyload member__img" loading="lazy"/></div>
        <div className="member__text">
            <div className="member__name">{firstname} {lastname}</div>
            <div className="member__role">{role}</div>
        </div>
    </div>
);

export default Member;
