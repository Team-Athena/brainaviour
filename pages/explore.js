import { useEffect, useState } from "react"
import Grid from '@material-ui/core/Grid'
import Image from 'next/image'
import styled from 'styled-components'
import Menubar from 'components/Menubar'
import Dashboard from "../components/Dashboard"
import { colors } from 'styles/colors'
import { Skeleton } from "@material-ui/lab"
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
    const [hasPredicted, setHasPredicted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [metrics, setMetrics] = useState({})
    const [behaviour, setBehaviour] = useState('')
    const [image, setImage] = useState('https://via.placeholder.com/150')
    const [brain, setBrain] = useState('')
    const [matrix, setMatrix] = useState('https://via.placeholder.com/150')

    const shortName = {
        "Working Memory" : "ListSort_Unadj",
        "Processing Speed" : "ProcSpeed_Unadj",
        "Fluid Intelligence" : "PMAT24_A_CR"
    }

    const getGraphs = async () => {
        console.log("getGraphs called...")
        // if (hasPredicted === false) {
        console.log("Getting graphs...")
        // setHasPredicted(true)
        setPredicting(true)
        await axios.get(`http://localhost:5000/architecture/${shortName[behaviour]}`).then(response => {
            setImage(response.config.url)
        })
        await axios.get(`http://localhost:5000/graphs/${shortName[behaviour]}`).then(res => {
            console.log('matrix', res)
            setMatrix(res.config.url)
        })
        await axios.get(`http://localhost:5000/3d-graph/${shortName[behaviour]}`).then(res => {
            setBrain(res.data)
            setPredicting(true)
        })
    }

    // useEffect(async () => {
    //     console.log('called!', hasPredicted)
    //     if (!hasPredicted) {

    //         // axios.get(`http://localhost:5000/architecture/${shortName[behaviour]}`).then(response => {
    //         //     setImage(response.config.url)
    //         // })
    //         axios.get(`http://localhost:5000/graphs/${shortName[behaviour]}`).then(res => {
    //             console.log('matrix', res)
    //             setMatrix(res.config.url)
    //         })
    //         await axios.get(`http://localhost:5000/3d-graph/${shortName[behaviour]}`).then(res => {
    //             setBrain(res.data)
    //         })
    //         setHasPredicted(true)
    //     }
    // }, [isPredicting, hasPredicted])

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
            <Menubar 
                getGraphs={getGraphs}   
                setMetrics={setMetrics} 
                setBehaviour={setBehaviour} 
                behaviour={behaviour} 
                setHasPredicted={setHasPredicted}
                setLoading={setLoading}
                />
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
            <Grid item xs={12}>
                {!isPredicting && <DefaultText styles>💡 Start by uploading a dataset</DefaultText>}
                {isPredicting && <Dashboard metrics={metrics} behaviour={behaviour} matrix={matrix} loading={loading}/>}
            </Grid>
        </Grid>
        <Grid container item xs={12} justify="center" alignItems="flex-start" style = {{paddingBottom:"5vh", paddingTop: "3vh"}}>
            {isPredicting && 
            <>
                <Grid item xs={5}>
                    <h2>Brain Connectome Model</h2>
                    <InnerHTML html={brain}/>
                </Grid>
                <Grid item xs={7}>
                    <h2>{`${shortName[behaviour]} Architecture Model`}</h2>
                    {image === 'https://via.placeholder.com/150' && <Skeleton variant="rectangular" width={500} height={200} />}
                    {isPredicting && image !== 'https://via.placeholder.com/150' && <Image loader={() => image} src={image} layout="responsive" width = {700} height = {250}/>}
                </Grid>
            </>
            }
        </Grid>
    </MainContainer>
  )
}
