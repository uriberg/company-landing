import React from 'react';
import LazyLoad from 'react-lazyload';

type Props = {
    imgSrc: string,
    firstname: string,
    lastname: string,
    role: string
}

const Member = ({imgSrc, firstname, lastname, role}: Props) => (
    <div className="member">
        <div><LazyLoad><img src={`${imgSrc}?img=${firstname}`} alt="" className="member__img"/></LazyLoad></div>
        <div className="member__text">
            <div className="member__name">{firstname} {lastname}</div>
            <div className="member__role">{role}</div>
        </div>
    </div>
);

export default Member;
