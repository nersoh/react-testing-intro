import React, { useState } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core'

const Button = props => (
    <button
        css={{
            appearance: 'none',
            background: 'white',
            width: '25%',
            height: '25%',
            fontSize: '2rem',
            cursor: 'pointer'
        }}
        {...props}
    ></button>
)

export default () => {
    const [clickCount, setClickCount] = useState(0);
    const handleClick = () => setClickCount(prevClickCount => prevClickCount + 1);

    return (
        <Button data-testid="clickCounter" onClick={handleClick}>
        Clicks: {clickCount}
        </Button>
    );
};
   