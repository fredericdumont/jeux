import { Grid } from '@material-ui/core'
import React from 'react'

const Row = (props) => {
    return <Grid
        container
        {...props}
    >
        {props.children}
    </Grid>
}

export default Row
