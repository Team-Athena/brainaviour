import { useEffect, useState } from "react"
import { Card, CardContent, Typography, CircularProgress } from "@material-ui/core"

export default function Metric({ isLoading, name,  value }) {
    const [loading, setLoading] = useState(isLoading)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 4000)
    })

    return (
        <Card style={{ padding: 10 }}>
            <CardContent>
                <Typography variant="h6" style={{fontFamily: 'Roboto Mono', color: 'grey' }}>
                    {<strong>{name}</strong>}
                </Typography>
                <Typography variant="h3" style={{fontFamily: 'Roboto Mono'}}>
                    {!loading && value}
                    {loading &&  <CircularProgress size={28} color="black"/>}
                </Typography>
            </CardContent>
        </Card>
    )
}