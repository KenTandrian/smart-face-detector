import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt 
                className="Tilts br2 shadow-2 w-150" 
                style={{height: '150px', width: '150px'}}
                tiltMaxAngleX={35}
                tiltMaxAngleY={35}
            >
                <div className="pa3">
                    <img style={{paddingTop: '3px'}} src={brain} alt="Logo" />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;