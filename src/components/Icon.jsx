import React, { Component, Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import Main from "react-icons/lib/md/subtitles";
import Person from "react-icons/lib/md/group";
import Search from "react-icons/lib/go/search";
import Notifications from "react-icons/lib/io/android-notifications";
import FullMenu from "react-icons/lib/md/format-align-justify";
import Messenger from "react-icons/lib/fa/commenting";
import RecommendPerson from "react-icons/lib/ti/user-add";
import FriednCode from "react-icons/lib/io/ios-grid-view-outline";

const defaultColor = "rgba(65, 95, 160, 9)";
const ClickedColor = "rgba(52, 61, 108, 9)";

export default class Icons extends Component {
    state = {
        color: defaultColor,               
    }        
    
    handleClick = (e) => {
        e.stopPropagation();      
        this.setState({
            color: ClickedColor

        })             
    }    

    render() {        
        return <div>
            <GlobalStyle />
            <IconContainer color={this.state.color} onClick={this.handleClick} />
          </div>        
    }
}

const IconContainer = (props) => {     
    return (
        <Fragment>
            <Icon color={props.color} onClick={props.onClick}>
                <h2><Main  /></h2>
            </Icon>
            <Icon color={props.color} onClick={props.onClick}>
                <h2><Person /></h2>
            </Icon>
            <Icon color={props.color} onClick={props.onClick}>
                <h2><Messenger /></h2>
            </Icon >
            <Icon color={props.color} onClick={props.onClick}>
                <h2><Notifications onClick={props.onClick}/></h2>
            </Icon>
            <Icon color={props.color} onClick={props.onClick}>
                <h2><Search /></h2>
            </Icon>
            <Icon color={props.color} onClick={props.onClick}>
                <h2><FullMenu /></h2>
            </Icon>                    
            
            
            <RecommendPerson />                       
            <FriednCode />           
            <Search />
        </Fragment>
    );
};
const GlobalStyle = createGlobalStyle`
    body{
        margin: 0px;
        margin-right: -2px;          
    }
    h2 {
        margin: 0px;
    }
`;

const Icon = styled.div`
    display: inline-block;
    text-align: center;
    margin: 0 auto;
    width: 16.65%;
    height: 25px;
    padding-top: 10px;
    padding-bottom: 10px;
    line-height: 0px         
    background-color:${props => props.color};    
    cursor: pointer;
    
    `;
    
    // &: hover {
    //   background - color: rgba(65, 91, 140, 9);
    //   background - color: rgba(52, 61, 108, 9);
    //   color: white;
    // }   