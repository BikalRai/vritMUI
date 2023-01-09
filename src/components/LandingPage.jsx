import {
    AppBar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CssBaseline,
    Grid,
    Toolbar,
    Typography,
} from '@mui/material';
import NoteIcon from '@mui/icons-material/Note';

import React from 'react';
import { Container } from '@mui/system';

const LandingPage = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position="relative" color="secondary">
                <Toolbar>
                    <NoteIcon />
                    <Typography variant="h6">Posts</Typography>
                </Toolbar>
            </AppBar>
            <main>
                <Grid>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center">
                            Posts
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Description here
                        </Typography>
                        <Grid>
                            <Grid container justifyContent="center" spacing={2}>
                                <Grid item>
                                    <Button variant="contained">
                                        Primary Button
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined">
                                        Secondary Button
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
                <Grid py={2}>
                    <Container>
                        <Grid container spacing={4}>
                            <Grid item>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        sx={{ height: 140 }}
                                        image="https://source.unsplash.com/random"
                                        title="green iguana"
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                        >
                                            Lizard
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            Lizards are a widespread group of
                                            squamate reptiles, with over 6,000
                                            species, ranging across all
                                            continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Share</Button>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        sx={{ height: 140 }}
                                        image="https://source.unsplash.com/random"
                                        title="green iguana"
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                        >
                                            Lizard
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            Lizards are a widespread group of
                                            squamate reptiles, with over 6,000
                                            species, ranging across all
                                            continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Share</Button>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        sx={{ height: 140 }}
                                        image="https://source.unsplash.com/random"
                                        title="green iguana"
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                        >
                                            Lizard
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            Lizards are a widespread group of
                                            squamate reptiles, with over 6,000
                                            species, ranging across all
                                            continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Share</Button>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </main>
        </>
    );
};

export default LandingPage;
