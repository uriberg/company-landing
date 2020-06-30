import React from 'react';
import Member from "./member";

type Props = {
    data: [];
}

const Staff = ({data}: Props) => (
    <div>
        {data.map((member: any, index) => {
            return <Member lastname={member.lastname} key={index}/>
        })}
    </div>
);

export default Staff;
