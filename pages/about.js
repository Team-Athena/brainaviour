import { useEffect, useState } from "react"
import styled from 'styled-components'
import { Grid, Avatar } from "@material-ui/core";
import Image from "next/image";
import { colors } from 'styles/colors'


const DefaultText = styled.h1`
    color: ${colors.light}70;
    font-size: 30px;
    font-weight: 500;
    height: 100%;
    text-align: center;
`;

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    flex-direction: column;
    position: relative;
    padding-bottom: 10vh;
    margin-top: 6vh;
    margin-left: 6vw;
    margin-right: 10vw;
`;


export default function Explore() {
    const sendEmail = (name) => {
        window.open(`mailto:${name}@student.monash.edu`)
    }
  return (
    <MainContainer>
        <Grid container spacing={10} style={{textAlign: 'center'}}>
            <Grid item xs={4} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Avatar>A</Avatar>
                <h2>Adrienne Rio</h2>
                <h3 onClick={() => sendEmail('aatm0001')} style={{textDecoration: 'underline', cursor: 'pointer'}}>aatm0001@student.monash.edu</h3>
            </Grid>
            <Grid item xs={4} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Avatar>Z</Avatar>
                <h2>Chong Zhen Tao</h2>
                <h3 onClick={() => sendEmail('zcho0013')} style={{textDecoration: 'underline', cursor: 'pointer'}}>zcho0013@student.monash.edu</h3>
            </Grid>
            <Grid item xs={4} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Avatar>S</Avatar>
                <h2>Khoo Shi Hui</h2>
                <h3 onClick={() => sendEmail('skho0019')} style={{textDecoration: 'underline', cursor: 'pointer'}}>skho0019@student.monash.edu</h3>
            </Grid>
        </Grid>
    </MainContainer>
  )
}
