import styled from 'styled-components';
import {medGrey} from './GlobalStyle';

export const Button = styled.div`
    margin-top: 20px;
    padding: 20px;
    background-color: white;
    box-shadow: 0px 3px 5px 2px${medGrey};
    box-sizing: border-box;
    ${({height}) => height && `height: ${height}px`};


    @media (max-width: 1200px) {
        padding: 10px;
    }
`