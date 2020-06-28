import React from "react";
import Map from "./Map";
import {setMapScale} from "../../redux/map.reducer";
import {connect} from "react-redux";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        map: state.map,
    }
};

let mapDispatchToProps = (dispatch)=> {
    return {
        setScale: (scale)=> {
            dispatch(setMapScale(scale));
        }
    }
};

export default compose(
    connect(mapStateToProps,mapDispatchToProps)
)(Map);