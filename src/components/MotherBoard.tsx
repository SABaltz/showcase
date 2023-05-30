import React from 'react'
import CircuitBackground from "./CircuitBackground";

export default function MotherBoard() {
    let svgFill = '#efefef'

    return (
        <svg width={'100%'} height={'100vh'}>
            <rect width="100vw" height="100%" fill={'#234129'}/>
            <g>
                <CircuitBackground></CircuitBackground>
                <text x="3%" y="10%" fontSize="2rem" wordSpacing="20pt" fill={svgFill}>
                    Samuel (Arthur) Baltz
                </text>
            </g>

        </svg>
    );
}
