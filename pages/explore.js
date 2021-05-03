import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import Menubar from 'components/Menubar'
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
  return (
    <MainContainer>
        <Grid container item xs={12} direction="column">
            <Menubar />
        </Grid>
        <Grid container item xs={12} justify="center" alignItems="center">
            <DefaultText styles>Start by uploading a dataset</DefaultText>
        </Grid>
    </MainContainer>
  )
}
