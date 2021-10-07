import { useEffect, useState } from "react"
import { Card, CardContent, Typography, CircularProgress } from "@material-ui/core"

export default function Metric({ isLoading, name,  value }) {
    // const [loading, setLoading] = useState(isLoading)

    return (
        <Card style={{ padding: 10 }}>
            <CardContent>
                <Typography variant="h6" style={{fontFamily: 'Roboto Mono', color: 'grey' }}>
                    {<strong>{name}</strong>}
                </Typography>
                <Typography variant="h3" style={{fontFamily: 'Roboto Mono'}}>
                    {!isLoading && value}
                    {isLoading &&  <CircularProgress size={28} color="inherit"/>}
                </Typography>
            </CardContent>
        </Card>
    )
}