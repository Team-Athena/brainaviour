import { useEffect, useState } from "react"
import Grid from '@material-ui/core/Grid'
import Image from 'next/image'
import styled from 'styled-components'
import Menubar from 'components/Menubar'
import Dashboard from "../components/Dashboard"
import { colors } from 'styles/colors'
import axios from "axios"
import InnerHTML from 'dangerously-set-html-content'

const DefaultText = styled.h1`
    color: ${colors.light}70;
    font-size: 30px;
    font-weight: 500;
    height: 100%;
    text-align: center;
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
    const [behaviour, setBehaviour] = useState('')
    const [image, setImage] = useState('https://via.placeholder.com/150')
    const [brain, setBrain] = useState('')
    const [matrix, setMatrix] = useState('')

    const shortName = {
        "Working Memory" : "ListSort_Unadj",
        "Processing Speed" : "ProcSpeed_Unadj",
        "Fluid Intelligence" : "PMAT24_A_CR"
    }

    useEffect(async () => {
        if (behaviour !== '') {
            axios.get(`http://localhost:5000/architecture/${shortName[behaviour]}`).then(response => {
                setImage(response.config.url)
            })
            await axios.get(`http://localhost:5000/3d-graph/${shortName[behaviour]}`).then(res => {
                setBrain(res.data)
            })
            await axios.get(`http://localhost:5000/graphs/${shortName[behaviour]}`).then(res => {
                setMatrix(response.config.url)
        })
        
        }
    }, [isPredicting])

    // const behaviour

    // const imgUrl = () => {
    //     axios.get(`http://localhost:5000/architecture/${behaviour}`).then(response => {
    //         setState({image:response.config.url})
    // })
    // }

    // useEffect(() => {
    //     if (behaviour !== '') {
    //         axios.get(`http://localhost:5000/architecture/${behaviour}`).then(
    //         setImage({image:response.config.url})
    //         )
    //     }
    // }, [behaviour])


  return (
    <MainContainer>
        <Grid container item xs={12} direction="column">
            <Menubar setPredicting={setPredicting} setMetrics={setMetrics} setBehaviour={setBehaviour} behaviour={behaviour}/>
        </Grid>
        {/* <Grid container item xs={12} justify="center" alignItems="center">
            {!isPredicting && <DefaultText styles>Start by uploading a dataset</DefaultText>}
            {isPredicting && <Dashboard metrics={metrics}/>}
            <Image loader={() => image} src={image} layout="fill"/>
        </Grid> */}
        {/* <Grid item xs={12} justify="center" alignItems="center"> */}
            {/* <Image src={image} layout="fill"/> */}
            {/* <Image loader={() => image} src={image} layout="fill"/>  */}
        {/* </Grid> */}
        
        {/* <Grid container item xs={12} justify="center" alignItems="center">
            <Grid item xs = {12}>  
                {!isPredicting && <DefaultText styles>Start by uploading a dataset</DefaultText>}
                {isPredicting && <Dashboard metrics={metrics}/>}
            </Grid>
            <Grid item xs = {12}>
                <Image loader={() => image} src={image} width = {500} height = {500}/>
            </Grid>
        </Grid> */}

        <Grid container item xs={12} justify="center" alignItems="center">
            <Grid item xs={!isPredicting ? 12 : 7}>
                {!isPredicting && <DefaultText styles>Start by uploading a dataset</DefaultText>}
                {isPredicting && <Dashboard metrics={metrics} behaviour={behaviour} matrix={matrix}/>}
            </Grid>
            {isPredicting && 
            <Grid item xs={5} style={{display: 'flex', justifyContent: 'center', paddingTop: 50}}>
                <InnerHTML html={brain}/>
            </Grid>}
        </Grid>
        <Grid item xs={12} justify="center" alignItems="center" style = {{marginTop:"5vh", paddingBottom:"5vh"}}>
            {/* <Image src={image} layout="fill"/> */}
            {isPredicting && <Image loader={() => image} src={image} layout="responsive" width = {500} height = {200}/>}
            {/* <Image loader={() => image} src={image} width = {500} height = {500}/>  */}
        </Grid>
    </MainContainer>
  )
}
