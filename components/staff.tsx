import React from 'react';
import Member from "./member";

type Props = {
    data: [];
}

const Staff = ({data}: Props) => (
    <div className="staffList">
        {data.map((member: any, index) => {
            return <Member
                    imgSrc={member.avatar}
                    firstname={member.firstname}
                    lastname={member.lastname}
                    role={member.job}
                    key={index}/>
        })}
    </div>
);

export default Staff;
