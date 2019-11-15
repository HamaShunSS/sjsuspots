import React from 'react';

const ScrollMini = (props) => {
    return (
        <div className="bg-white-40" style={{ overflowY: 'scroll', border: '1px solid black', height: '50px'}}>
            {props.children}
        </div>
    );
};



export default ScrollMini;