import React, { Component, Fragment } from 'react';
import { createGlobalStyle } from 'styled-components'
import Main from "react-icons/lib/md/subtitles";
import Person from "react-icons/lib/md/group";
import Search from "react-icons/lib/go/search";
import Notifications from "react-icons/lib/io/android-notifications";
import FullMenu from "react-icons/lib/md/format-align-justify";
import Messenger from "react-icons/lib/fa/commenting";
import RecommendPerson from "react-icons/lib/ti/user-add";
import FriendCode from "react-icons/lib/io/ios-grid-view-outline";

export default class Icons extends Component {
    state = {
        basic: {            
            BColor: "rgba(65, 95, 160, 9)",
            Color: "black"
        }         
    }    

    handleClick = (e) => {   
        e.stopPropagation();
        console.log(e.target);
        
        this.setState({
            basic: {                
                BColor: "rgba(52, 61, 108, 9)",
                Color: "white"
            }
        })             
    }

    render() {
        const { basic } = this.state;
        const style = {
            display: 'inline-block',
            textAlign: 'center',
            margin: '0 auto',
            width: '16.65%',
            height: '25px',
            paddingTop: '10px',
            paddingBottom: '10px',
            lineHeight: '0px' ,
            cursor: "pointer" ,
            backgroundColor: `${basic.BColor}`,
            color: `${basic.Color}`
        }
        const GlobalStyle = createGlobalStyle`
            body{
                margin: 0px;
                margin-right: -2px;          
            }
            h2 {
                margin: 0px;
            }
        `;
        
        return <Fragment>
            <GlobalStyle />
            <Main style={style} onClick={this.handleClick} />
            <Person style={style} onClick={this.handleClick} />
            <Messenger style={style} onClick={this.handleClick} />
            <Notifications style={style} onClick={this.handleClick} />
            <Search style={style} onClick={this.handleClick} />
            <FullMenu style={style} onClick={this.handleClick} />

            <RecommendPerson />
            <FriendCode />
            <Search />
          </Fragment>;
    }
}