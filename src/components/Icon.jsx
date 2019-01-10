import React, { Component, Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components'
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
        basic: [
            {
                id: 0,
                BColor: "rgba(65, 95, 160, 9)",
                Color: "black"
            },
            {
                id: 1,
                BColor: "rgba(65, 95, 160, 9)",
                Color: "black"
            },
            {
                id: 2,
                BColor: "rgba(65, 95, 160, 9)",
                Color: "black"
            },
            {
                id: 3,
                BColor: "rgba(65, 95, 160, 9)",
                Color: "black"
            },
            {
                id: 4,
                BColor: "rgba(65, 95, 160, 9)",
                Color: "black"
            },
            {
                id: 5,
                BColor: "rgba(65, 95, 160, 9)",
                Color: "black"
            }
        ]
    }

    handleClick = (e, data) => {
        e.stopPropagation();
        const { basic } = this.state;
        const Clicked = {
            BColor: "rgba(52, 61, 108, 9)",
            Color: "white"
        }
        this.setState({
            basic: basic.map(
                info => e.id === this.state.basic.id ?
                    { ...Clicked, ...data } : info
            )
        })
    }
    render() {
        const { basic } = this.state

        return <div>
            <GlobalStyle />
            <IconContainer color={basic}
                onClick={this.handleClick} />
        </div>
    }
}

const IconContainer = (props) => {

    return (
        <Fragment>
            <Icon color={props.color[0]} onClick={props.onClick}>
                <h2><Main /></h2>
            </Icon>
            <Icon color={props.color[1]} onClick={props.onClick}>
                <h2><Person /></h2>
            </Icon>
            <Icon color={props.color[2]} onClick={props.onClick}>
                <h2><Messenger /></h2>
            </Icon >
            <Icon color={props.color[3]} onClick={props.onClick}>
                <h2><Notifications onClick={props.onClick} /></h2>
            </Icon>
            <Icon color={props.color[4]} onClick={props.onClick}>
                <h2><Search /></h2>
            </Icon>
            <Icon color={props.color[5]} onClick={props.onClick}>
                <h2><FullMenu /></h2>
            </Icon>


            <RecommendPerson />
            <FriendCode />
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
    background-color:${props => props.color.BColor};         
    color:${props => props.color.Color};        
    cursor: pointer;   
    `;    