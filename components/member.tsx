import React from 'react';

type Props = {
    imgSrc: string,
    firstname: string,
    lastname: string,
    role: string
}

const Member = ({imgSrc, firstname, lastname, role}: Props) => (
    <div className="member">
        <div><img src={`${imgSrc}?img=${firstname}`} alt="" className="member__img"/></div>
        <div className="member__text">
            <div className="member__name">{firstname} {lastname}</div>
            <div className="member__role">{role}</div>
        </div>
    </div>
);

export default Member;
