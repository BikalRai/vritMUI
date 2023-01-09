import { Grid } from '@mui/material';
import React from 'react';

const GridLayout = () => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    One
                </Grid>
                <Grid item>Two</Grid>
                <Grid item>Three</Grid>
                <Grid item>Four</Grid>
                <Grid item>Five</Grid>
                <Grid item>Six</Grid>
                <Grid item>Seven</Grid>
                <Grid item>Eight</Grid>
                <Grid item>Nine</Grid>
                <Grid item>Ten</Grid>
                <Grid item>Eleven</Grid>
                <Grid item>Twelve</Grid>
            </Grid>
        </>
    );
};

export default GridLayout;
