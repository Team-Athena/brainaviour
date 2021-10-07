import { useRef } from 'react'
import Grid from '@material-ui/core/Grid'
import { CircularProgress, Snackbar } from '@material-ui/core';
import Alert from "@material-ui/lab/Alert"
import {UploadButton, ResultsButton, MenuLabel, MenuText, TrainButton, Dropdown, DropdownButton, DropdownItem, DropdownContent } from "./styles"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useEffect, useState } from 'react' 
import axios from 'axios'
import Swal from 'sweetalert2'



export default function Menubar({ getGraphs, setMetrics, setBehaviour, behaviour, setHasPredicted , setLoading}) {
    // const [behaviour, setBehaviour] = useState('')
    const [loaded, setLoaded] = useState(false)
    const [filename, setFilename] = useState('Upload a dataset...')
    const [open, setOpen] = useState(false)
    const [success, setSuccess] = useState(false)
    const [uploading, setUploading] = useState(false)
    const hiddenInput = useRef()
    const shortName = {
        "Working Memory" : "ListSort_Unadj",
        "Processing Speed" : "ProcSpeed_Unadj",
        "Fluid Intelligence" : "PMAT24_A_CR"
    }


    const startPrediction = async () => {
        if (filename === 'Upload a dataset...') {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'No dataset uploaded'
              })
            return
        }
        setLoaded(true)
        setHasPredicted(false)
        setLoading(true)

        await getGraphs()
        
        await axios.get(`http://localhost:5000/predict/${shortName[behaviour]}`).then(res => {
            console.log('response' , res.data)
            setMetrics({
            "behavior": res.data.behavior,
            "correlation": res.data.correlation,
            "epochs": res.data.epochs,
            "mae": res.data.mae,
            "mse": res.data.mse,
            "predicted_score": res.data.predicted_score
        })
        setLoaded(false)
        setLoading(false)
        }

        )
    }

    const uploadDataset = (e) => {
        hiddenInput.current.click()
    }

    const handleChange = e => {
        const file = e.target.files[0]
        if (file) {
            setFilename(file.name)
            setUploading(true)
            const data = new FormData()
            data.append('file', file)

            axios.post('http://127.0.0.1:5000/upload', data , {}).then(res => {
                if (res.status === 200) {
                    setSuccess(true)
                    setUploading(false)
                }
            }).catch(err => {
                if (err.status === 400) {
                    setUploading(false)
                    setOpen(true)
                }
                console.log('err', err.status)
            })
        } else {
            setFilename('Upload a dataset...')
        }
    }

    return (
        <Grid container spacing={2} wrap="nowrap">
            <Snackbar open={open} autoHideDuration={2000} anchorOrigin={{vertical: 'top', horizontal: 'center'}} onClose={() => setOpen(false)}>
                <Alert severity="error" variant="filled">Invalid dataset format!</Alert>
            </Snackbar>
            <Snackbar open={success} autoHideDuration={2000} anchorOrigin={{vertical: 'top', horizontal: 'center'}} onClose={() => setSuccess(false)}>
                <Alert severity="success" variant="filled">Successfully uploaded dataset!</Alert>
            </Snackbar>
            <Grid item xs={5}>
                <Grid item>
                    <MenuLabel>Time Series Dataset</MenuLabel>
                </Grid>
                <Grid item container alignItems="center">
                    <Grid item xs={8}>
                        <MenuText>
                            {filename.length >= 23 ? filename.slice(0,23) + '...' : filename}
                        </MenuText>
                    </Grid>
                    <Grid item xs={4}>
                        <UploadButton onClick={uploadDataset}>
                            {!uploading && "Upload"}
                            {uploading  && <CircularProgress color="inherit" size={15}/>}
                        </UploadButton>
                    </Grid>
                    
                    
                    <input type="file" ref={hiddenInput} onChange={handleChange} style={{display: 'none'}} />
                </Grid>
            </Grid>

            <Grid item xs={7}>
                <Grid item>
                    <MenuLabel>Behaviour</MenuLabel>
                </Grid>
                <Dropdown>
                    <DropdownButton>
                        {behaviour === '' ? 'Select behaviour' : behaviour}
                        <ArrowDropDownIcon style={{fontSize: 20, alignSelf: 'flex-end', float: 'right'}}/>
                    </DropdownButton>
                    <DropdownContent>
                        <DropdownItem onClick={(e) => setBehaviour(e.target.innerText)}>Working Memory</DropdownItem>
                        <DropdownItem onClick={(e) => setBehaviour(e.target.innerText)}>Processing Speed</DropdownItem>
                        <DropdownItem onClick={(e) => setBehaviour(e.target.innerText)}>Fluid Intelligence</DropdownItem>
                    </DropdownContent>
                </Dropdown>


                {/* <Grid item style={{border: '1px solid black', padding: '10px 15px', marginRight: 15}}>     
                    Select behaviour
                    <ArrowDropDownIcon style={{fontSize: 20, alignSelf: 'flex-end', float: 'right'}}/>
                </Grid> */}
            </Grid>

            <Grid item container xs={2} alignItems="flex-end" justify="center">
                {/* <TrainButton style={{fontSize: 90}}/> */}
                <TrainButton onClick={startPrediction}>Predict</TrainButton>
            </Grid>

            {/* <Grid item container xs={2} alignItems="flex-end" justify="center">
                <ResultsButton>
                    {!loaded && "View Results"}
                    {loaded && <CircularProgress size={16}/>}
                </ResultsButton>
            </Grid> */}
        </Grid>
    )
}
