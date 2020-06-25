import React from "react";
import css from './Map.module.css'

const Map = (props) => {
    return (
        <div className={css.map_container}>
            <MapBox/>
        </div>
    )
}

let localState = {
    scale: 3
}

export default Map;


const MapBox = () => {
    let mapArray = [];
    for (let i = 0; i <= 110; i += 10) {
        for (let j = 0; j <= 110; j += 10) {
            mapArray = [...mapArray,{x: i, y: j}];
        }
    }
    let sc = localState.scale;
    console.log(mapArray);
    return (
        <svg className={css.svg_map_box}>
            {mapArray.map(q=><Quadrate key={''+q.x+''+q.y} x={q.x*sc} y={q.y*sc} w={10*sc} h={10*sc} f={'#000'} s={'#808080'}/>)}
        </svg>
    )
}

function elemClick() {
    console.log('zm9k');
}

const Quadrate = (props) => {
    let p = props;
    return (
        <rect onClick={elemClick} key={p.key} x={p.x} y={p.y} width={p.w} height={p.h} fill={p.f} stroke={p.s} strokeWidth="1"/>
    )
}

// const ScaleButton = () => {
//     return (
//
//     )
// }
