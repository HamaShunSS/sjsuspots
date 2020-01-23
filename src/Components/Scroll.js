import React from 'react';

const Scroll = (props) => {
    return (
        <div className="bg-white-40 fl w-100 w-100-ns" style={{ overflowY: 'scroll', border: '1px solid white', height: '700px'}}>
            {props.children}
        </div>
    );
};



export default Scroll;