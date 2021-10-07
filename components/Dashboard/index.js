import { Grid } from "@material-ui/core"
import Skeleton from "@material-ui/lab/Skeleton"
import Metric from "./Metric"
import Image from "next/image"

export default function Dashboard({ metrics, matrix,  loading }) {
    console.log('matrixx', matrix)
    const checkMatrix = () => {
        return matrix !== 'https://via.placeholder.com/150'
    }

    return (
        <Grid container spacing={2} style={{ marginTop: 20 }}>
            <Grid item xs={4}>
                <h2>Connectivity Matrix</h2>
                {!checkMatrix() && <Skeleton variant="rectangular" width={400} height={350} />}
                {checkMatrix() && <Image loader={() => matrix} src={matrix} layout="responsive" width={400} height={300} />}
            </Grid>
            <Grid item xs={8}>
                <h2 style={{ paddingBottom: 20 }}>Metrics</h2>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Metric name="MSE (Mean Square Error)" value={metrics.mse} isLoading={loading} />
                    </Grid>
                    <Grid item xs={6}>
                        <Metric name="MAE (Mean Average Error)" value={metrics.mae} isLoading={loading} />
                    </Grid>
                    <Grid item xs={6}>
                        <Metric name="Epochs" value={metrics.epochs} isLoading={loading}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Metric name="Predicted Score" value={metrics.predicted_score} isLoading={loading}/>
                    </Grid>
                </Grid>
            </Grid>
            {/* <Grid item xs={12}>
                <Metric name="Trials" value={0.91} />
            </Grid> */}
        </Grid>
    )
}