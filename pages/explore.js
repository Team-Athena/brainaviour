import { useState } from "react"
import Grid from '@material-ui/core/Grid'
import Image from 'next/image'
import styled from 'styled-components'
import Menubar from 'components/Menubar'
import Dashboard from "../components/Dashboard"
import { colors } from 'styles/colors'

const DefaultText = styled.h1`
    color: ${colors.light}70;
    font-size: 30px;
    font-weight: 500;
    height: 100%;
`;

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 50vh;
    margin-top: 10px;
`;

export default function Explore() {
    const [isPredicting, setPredicting ] = useState(false)
    const [metrics, setMetrics] = useState({})


    // const getArchitecture = () => {
    //     axios.get(`http://localhost:5000/architecture/${selectedBehavior}`).then(
            
    //     )
    // }



  return (
    <MainContainer>
        <Grid container item xs={12} direction="column">
            <Menubar setPredicting={setPredicting} setMetrics={setMetrics}/>
        </Grid>
        <Grid container item xs={12} justify="center" alignItems="center">
            {!isPredicting && <DefaultText styles>Start by uploading a dataset</DefaultText>}
            {isPredicting && <Dashboard metrics={metrics}/>}
        </Grid>
        {/* <Grid container item xs={12}>
            <Image src={imgUrl} layout="fill"/>
        </Grid> */}
    </MainContainer>
  )
}
