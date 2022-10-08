import React from "react";

export default function HiveCellSVG(props) {
    return(
        <svg 
            height={100}
            className={`hive-cell ${props.type === 'isPrimary' ? 'primary' : 'secondary'}`}
            id="e7Ac29mCInS1" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 300 300" 
            shapeRendering="geometricPrecision" 
            textRendering="geometricPrecision"
        >
            <polygon 
                className="cell-fill"
                points="15.996927,-131.529713 145.901927,-56.529714 145.901927,93.470286 15.996927,168.470287 -113.908073,93.470286 -113.908073,-56.529714 15.996927,-131.529713" 
                transform="matrix(.866025 0.5-.5 0.866025 145.381398 126.005799)" 
                fill={ props.type === 'isPrimary' ? 'yellow' : "#e6e6e6" } 
                strokeWidth="0"
            />
            <text 
                className="cell-letter"
                dx="0" 
                dy="0" 
                fontSize="100" 
                fontWeight="400" 
                transform="translate(125 184.226563)" 
                strokeWidth="0"
            >
                <tspan y="0" fontWeight="400" strokeWidth="0">{props.letter}</tspan>
            </text>
        </svg>
    )
}