import { Grid } from "@material-ui/core"
import Metric from "./Metric"
import Image from "next/image"

export default function Dashboard() {
    return (
        <Grid container spacing={2} style={{ marginTop: 20 }}>
            <Grid item xs={4}>
                <Image src="/matrix.png" alt="Matrix" width={400} height={300} />
            </Grid>
            <Grid item xs={8}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Metric name="MSE" value={0.01} isLoading/>
                    </Grid>
                    <Grid item xs={6}>
                        <Metric name="MAE" value={0.93} isLoading/>
                    </Grid>
                    <Grid item xs={6}>
                        <Metric name="Correlation" value={0.082} isLoading/>
                    </Grid>
                    <Grid item xs={6}>
                        <Metric name="Epochs" value={100} isLoading/>
                    </Grid>
                </Grid>
            </Grid>
            {/* <Grid item xs={12}>
                <Metric name="Trials" value={0.91} />
            </Grid> */}
        </Grid>
    )
}