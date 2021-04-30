import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import Menubar from 'components/Menubar'

const DefaultText = styled.h1`
    color: grey;
    font-size: 30px;
    font-weight: 500;
`;

{/* <Grid container item xs={12} justify="center" alignItems="center">
test
</Grid> */}

export default function Home() {
  return (
    <div>
        <Grid container spacing={2}>
            <Grid container item xs={12}  styles={{background: 'red'}} direction="row">
                <Menubar />
            </Grid>
            <Grid container item xs={12} justify="center" alignItems="center" >
                <DefaultText styles>Start by uploading a dataset</DefaultText>
            </Grid>
        </Grid>
    </div>
  )
}
