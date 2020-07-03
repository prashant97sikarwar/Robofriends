import React from 'react';

const Scroll = (props) => {
    return (
        <div style = {{ overflowY: 'scroll', border : '1px rgba(0,128,128,1)', height: '500px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;