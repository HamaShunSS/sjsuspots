import React from 'react';

const Scroll = (props) => {
    return (
        <div className="bg-white-40" style={{ overflowY: 'scroll', border: '1px solid black', height: '500px'}}>
            {props.children}
        </div>
    );
};



export default Scroll;