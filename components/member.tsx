import React from 'react';

type Props = {
    lastname: string
}

const Member = ({lastname}: Props) => (
    <div>
        {lastname}
    </div>
);

export default Member;
