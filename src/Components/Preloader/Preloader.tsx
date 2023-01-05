import React from 'react';
import preorder from "../Users/giphy.gif";

const Preloader = () => {
    return (
        <div>
            <img src={preorder} alt='loading'/>
        </div>
    );
};

export default Preloader;