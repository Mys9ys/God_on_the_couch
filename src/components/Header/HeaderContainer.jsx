import React from "react";
import Header from "./Header";


class HeaderContainer extends React.Component{
    componentDidMount(){

    }

    render(){
        return <Header {...this.props}/>
    }
}

export default HeaderContainer;