import React, {Component} from 'react';
import './App.css';
import MapContainer from "./components/Map/MapContainer";
import {Route, Switch} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";

class App extends Component {
    render() {
        return (
            <div className="app_wrapper">
                <HeaderContainer/>
                {/*<Navbar/>*/}
                <div className="app_wrapper_content">
                    <Switch>
                        <Route path="/" render={() =>
                            <MapContainer/>}/>
                        <Route path="/map" render={() =>
                            <MapContainer/>}/>
                        <Route path="*" render={() =>
                            <div>404 not found</div>
                        }/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
