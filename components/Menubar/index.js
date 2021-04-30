import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { colors } from 'styles/colors'

const UploadButton = styled.button`
    color: white;
    border: 1px solid transparent;
    background: black;
    font-size: 14px;
    font-family: 'Roboto Mono', monospace;
    font-weight: 500;
    padding: 10px 30px;
    cursor: pointer;

    &:hover {
        background: #dddddd;
        color: black;
        border: 1px solid black;
    }
`;

const UploadText = styled.p`
    padding-right: 25px;
    margin: 0px;
    height: 20px;
`;

const TrainButton = styled(PlayCircleFilledIcon)`
    width: 100px;
    color: ${colors.action};
    cursor: pointer;
    border: 1px solid transparent;

    &:hover {
        color: ${colors.warning};
    }
`;

export default function Menubar() {
  return (
    <div>
        <Grid container spacing={5} direction="row">
            <Grid item>
                <Grid item xs={12}>
                    <h3 style={{color: 'grey'}}>Time Series Dataset</h3>
                </Grid>
                <Grid container item justify="flex-start" alignItems="center">
                    <UploadText>No dataset uploaded...</UploadText>
                    <UploadButton>Upload</UploadButton>
                </Grid>
            </Grid>

            <Grid item style={{marginLeft: 15}}>
                <Grid item xs={12}>
                    <h3 style={{color: 'grey'}}>Models</h3>
                </Grid>
                <Grid container item justify="flex-start" alignItems="center">
                    <UploadText>No dataset uploaded...</UploadText>
                    <UploadButton>Upload</UploadButton>
                </Grid>
            </Grid>

            <Grid item styles={{marginLeft: 25}}>
                <Grid container alignItems="flex-end" style={{height: '100%'}}>
                    <Grid item xs={12}>
                        <TrainButton style={{fontSize: 80}}/>
                    </Grid>
                </Grid>
            </Grid>


        </Grid>
    </div>
  )
}
