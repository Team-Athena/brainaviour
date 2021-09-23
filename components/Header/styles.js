import styled from 'styled-components'
import { weights } from 'styles/weights'
import { colors } from 'styles/colors'

export const MainHeader = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 62% 8% 10% 10% 10%;
    width: 100%;
    align-items: start;
    background: transparent;
    box-shadow: none;
    padding-top: 15px;
`;

export const HeaderMainItem = styled.div`
    place-self: center stretch;
`;

export const HeaderItem = styled.div`
    place-self: center stretch;
    text-align: center;
    display: inline-block;
    cursor: pointer;
    width: 1;
    text-decoration: none;
    color: ${colors.action}70;

    &:after {
        display: block;
        height: 6px;
        width: 0;
        transition: width .3s;
    }

    &:hover {
        color: ${colors.action};
    }

    &:hover:after {
        width: 100%;
        transition: width .3s;
    }
`;

export const HeaderTitle = styled.h1`
    font-weight: ${weights.bold};
    font-size: 25px;
`;

export const HeaderText = styled.h1`
    font-weight: ${weights.bold};
    font-size: 20px;
    cursor: pointer;
`;

