import React, { Component, Fragment } from 'react';
import styled from 'styled-components'
import ManImage from '../data/img/ManImage.png'
import GirlImage from '../data/img/GirlImage.png'
import CustomSample from '../data/img/CustomSample.png'

export default class Avatar extends Component {
 
    render() {
        // console.log(this.props);
        return (
            <div>                
                <Persons />
            </div>
        );
    }
}

const Persons = () => {
   
    return (
        <Fragment>
            <PersonCircle />
            <PersonSquare />
            <PersonCustom  /> 
            <PersonCircleSmall />           
            <PersonSquareSmall />
            <PersonCircleVerySmall />
            <PersonSquareVerySmall />
        </Fragment>
    );
}

// 원형 기본 아바타
export const PersonCircle = styled.div`
  margin: 5px;
  width: 100px;
  height: 100px;  
  border-radius: 50%;
  cursor: pointer;
  background-image: url(${ManImage});
  &hover {
  }  
`;

// 사각형 기본 아바타
export const PersonSquare = styled.div`
  margin: 5px;
  width: 100px;
  height: 100px;  
  cursor: pointer;
  background-image: url(${GirlImage});
`;

// 사용자 아바타
export const PersonCustom = styled.div`
  display: none;
  margin: 5px;
  width: 100px;
  height: 100px;  
  cursor: pointer;
  background-image: url(${CustomSample});
`;

// 작은 원형 아바타
export const PersonCircleSmall = styled.div`
  margin: 5px;
  width: 50px;
  height: 50px;  
  border-radius: 50%;
  cursor: pointer;
  background-image: url(${ManImage});
  background-size: cover;
`;

// 작은 사각형 아바타
export const PersonSquareSmall = styled.div`
  margin: 5px;
  width: 50px;
  height: 50px;  
  cursor: pointer;
  background-image: url(${GirlImage});
  background-size: cover;
`;

// 매우 작은 원형 아바타
export const PersonCircleVerySmall = styled.div`
  margin: 5px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
  background-image: url(${ManImage});
  background-size: cover;
`;

// 매우 작은 사각형 아바타
export const PersonSquareVerySmall = styled.div`
  margin: 5px;
  width: 25px;
  height: 25px;  
  cursor: pointer;
  background-image: url(${GirlImage});
  background-size: cover;
`;