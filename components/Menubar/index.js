import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import PlayCircleFilledIcon  from '@material-ui/icons/PlayCircleFilled';
import { colors } from 'styles/colors'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

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
        background: ${colors.primary};
        color: black;
        border: 1px solid black;
    }
`;

const ResultsButton = styled.button`
    color: black;
    border: 1px solid black;
    background: ${colors.primary};
    font-size: 16px;
    font-family: 'Roboto Mono', monospace;
    font-weight: 700;
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
        background: ${colors.action};
        color: white;
        border: 1px solid black;
    }
`;

const MenuText = styled.p`
    padding-right: 10px;
    margin: 0px;
    height: 20px;
`;

const MenuLabel = styled.h3`
    color: ${colors.light};
`;

const TrainButton = styled.button`
    color: black;
    border: 1px solid black;
    background: ${colors.primary};
    font-size: 16px;
    font-family: 'Roboto Mono', monospace;
    font-weight: 700;
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
        background: ${colors.warning};
        color: white;
        border: 1px solid ${colors.warning};
    }
`;

export default function Menubar() {
  return (
    <Grid container spacing={2} wrap="nowrap">
        
        <Grid item xs={4} style={{marginRight: 15}}>
            <Grid item>
                <MenuLabel>Time Series Dataset</MenuLabel>
            </Grid>
            <Grid item container alignItems="center">
                <MenuText>data_MOVIE_runs_roi_300_n...</MenuText>
                <UploadButton>Upload</UploadButton>
            </Grid>
        </Grid>

        <Grid item xs={5}>
            <Grid item>
                <MenuLabel>Models</MenuLabel>
            </Grid>

            <Grid item style={{border: '1px solid black', padding: '10px 15px', marginRight: 15}}>     
                Select an algorithm
                <ArrowDropDownIcon style={{fontSize: 20, alignSelf: 'flex-end', float: 'right'}}/>
            </Grid>
        </Grid>

        <Grid item container xs={2} alignItems="flex-end" justify="center">
            {/* <TrainButton style={{fontSize: 90}}/> */}
            <TrainButton>Start Training</TrainButton>
        </Grid>

        <Grid item container xs={2} alignItems="flex-end" justify="center">
            <ResultsButton>View Results</ResultsButton>
        </Grid>
    </Grid>
  )
}
