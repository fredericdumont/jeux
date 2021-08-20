import React from 'react'
import { Grid } from '@material-ui/core'

const Col = (props) => {
    return <>
        {
            props.offset > 0 && <Grid
                item
                xs={props.offset}
            />
        }

        <Grid
            item
            {...props}
        >
            {props.children}
        </Grid>
    </>
}

export default Col
