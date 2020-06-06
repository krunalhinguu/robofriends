import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll',border: '0px solid',height: '700px',padding: '10px'}}    >
            {props.children}
        </div>
    )
};

export default Scroll;