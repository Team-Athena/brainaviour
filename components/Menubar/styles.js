import styled from 'styled-components'
import { colors } from 'styles/colors'

export const UploadButton = styled.button`
    color: white;
    border: 1px solid transparent;
    background: black;
    font-size: 14px;
    font-family: 'Roboto Mono', monospace;
    font-weight: 500;
    padding: 10px 30px;
    cursor: pointer;

    &:hover {
        background: ${colors.primary};
        color: black;
        border: 1px solid black;
    }
`;

export const ResultsButton = styled.button`
    color: black;
    border: 1px solid black;
    background: ${colors.primary};
    font-size: 16px;
    font-family: 'Roboto Mono', monospace;
    font-weight: 700;
    padding: 10px 20px;
    width: 100%;
    cursor: pointer;

    &:hover {
        background: ${colors.action};
        color: white;
        border: 1px solid black;
    }
`;

export const MenuText = styled.p`
    padding-right: 10px;
    margin: 0px;
    height: 20px;
`;

export const MenuLabel = styled.h3`
    color: ${colors.light};
`;

export const TrainButton = styled.button`
    color: black;
    border: 1px solid black;
    background: ${colors.primary};
    font-size: 16px;
    font-family: 'Roboto Mono', monospace;
    font-weight: 700;
    width:  100%;
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
        background: ${colors.warning};
        color: white;
        border: 1px solid ${colors.warning};
    }
`;

export const DropdownButton = styled.button`
    background-color: transparent;
    color: black;
    padding: 10px 15px;
    font-size: 16px;
    width: 100%;
    border: 1px solid black;
    text-align: start;
    font-family: 'Roboto Mono';
`;

export const DropdownContent = styled.div`
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 100%;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
`;

export const Dropdown = styled.div`
    position: relative;
    display: inline-block;
    width: 100%;

    &:hover ${DropdownContent} {
        display: block;
    }
`;


export const DropdownItem = styled.a`
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    cursor: pointer;

    &:hover {
        background-color: lightgrey;
    }
`;