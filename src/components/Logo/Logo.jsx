import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className="ma4 mt0 mb0">
            <Tilt 
                className="Tilts br2 shadow-2 w-100" 
                style={{height: '100px', width: '100px'}}
                tiltMaxAngleX={30}
                tiltMaxAngleY={30}
            >
                <div className="pa3">
                    <img style={{paddingTop: '3px'}} src={brain} alt="Logo" />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;