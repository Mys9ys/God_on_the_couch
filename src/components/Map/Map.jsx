import React from "react";
import css from './Map.module.css'



const Map = (props) => {
    console.log('props', props);
    return (
        <div className={css.map_container}>
            <ScaleButton scale={props.map.scale}  setScale={props.setScale}/>
            <MapBox scale={props.map.scale}/>
        </div>
    )
}

export default Map;


const MapBox = (props) => {
    let mapArray = [];
    let maxX = 400;
    let maxY = 200;
    for (let i = 0; i <= maxX; i += 10) {
        for (let j = 0; j <= maxY; j += 10) {
            mapArray = [...mapArray,{x: i, y: j}];
        }
    }
    let sc = props.scale;
    console.log(mapArray, 'props', props);
    return (
        <svg className={css.svg_map_box}>
            {mapArray.map((q,i)=><Quadrate id={i} x={q.x*sc} y={q.y*sc} w={10*sc} h={10*sc} f={'#000'} s={'#808080'}/>)}
        </svg>
    )
}

const Quadrate = (props) => {
    let p = props;
    console.log('Quadrate props', props);
    function elemClick() {
        console.log('zm9k');
    }
    return (
        <rect onClick={elemClick} key={p.id} x={p.x} y={p.y} width={p.w} height={p.h} fill={p.f} stroke={p.s} strokeWidth="1"/>
    )
}

const ScaleButton = (props) => {
    console.log('ScaleButton',props);
    function scrollScale(e) {
        console.log('scroll',e.currentTarget.value);
        props.setScale(e.currentTarget.value);
    }
    return (
        <input type={'range'} max={3} min={1} onChange={scrollScale} value={props.scale}/>
    )
}
