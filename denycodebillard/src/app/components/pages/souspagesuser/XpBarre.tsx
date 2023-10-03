import React from 'react';

interface XpBarreProps {
    lvl: number;
    xp: number;
}


export const XpBarre = ({ lvl, xp } : XpBarreProps) => {

    const a = 1;
    const b = 0.98;
    const c = 10;

    function inverse(x : number) {
    let xn = x;
    let xn1 = xn - (a * Math.log10(xn+1) * b/Math.pow(b, (xn+1)/c) - lvl) / (a * Math.log(10) * b * Math.pow(b, (xn+1)/c) / c - a * Math.log(b) * Math.log10(xn+1) * Math.pow(b, (xn+1)/c) / Math.pow(c, 2));
    while (Math.abs(xn1 - xn) > 0.00001) {
        xn = xn1;
        xn1 = xn - (a * Math.log10(xn+1) * b/Math.pow(b, (xn+1)/c) - lvl) / (a * Math.log(10) * b * Math.pow(b, (xn+1)/c) / c - a * Math.log(b) * Math.log10(xn+1) * Math.pow(b, (xn+1)/c) / Math.pow(c, 2));
    }
    return xn1;
    }

    const barreStyle = {
        width: `${xp - inverse(lvl)}%`,
    };

    return <div className="xp-bar" style={barreStyle}></div>;
};