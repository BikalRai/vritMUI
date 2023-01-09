import {
    AppBar,
    Box,
    Button,
    CssBaseline,
    Grid,
    Link,
    TextField,
    Toolbar,
    Typography,
} from '@mui/material';
import React from 'react';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SearchIcon from '@mui/icons-material/Search';
import { Container } from '@mui/system';

const AboutUs = () => {
    return (
        <>
            <CssBaseline />
            <AppBar color="secondary" position="fixed">
                <Toolbar>
                    <Grid
                        container
                        justifyContent="center"
                        spacing={30}
                        alignItems="center"
                    >
                        <Grid item>
                            <Grid container alignItems="center" spacing={2}>
                                <Grid item>
                                    <LabelImportantIcon />
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6">
                                        About Us
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid
                                container
                                justifyContent="space-between"
                                spacing={8}
                            >
                                <Grid item>
                                    <Link
                                        component="button"
                                        variant="body2"
                                        underline="hover"
                                        color="#fff"
                                    >
                                        Home
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link
                                        component="button"
                                        variant="body2"
                                        underline="hover"
                                        color="#fff"
                                    >
                                        About
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link
                                        component="button"
                                        variant="body2"
                                        underline="hover"
                                        color="#fff"
                                    >
                                        Contact
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container alignItems="center">
                                <Grid item mr={2}>
                                    <TextField
                                        variant="standard"
                                        placeholder="Search"
                                        color="secondary"
                                    />
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined">
                                        <SearchIcon />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <main>
                <Grid>
                    <Box
                        sx={{
                            backgroundImage:
                                'url("https://images.unsplash.com/photo-1661961110144-12ac85918e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")',
                            height: '70vh',
                            backgroundSize: '100% 100%',
                        }}
                    >
                        <Grid
                            py={5}
                            container
                            justifyContent="center"
                            sx={{ height: '100%' }}
                            alignItems="center"
                        >
                            <Grid item>
                                <Typography
                                    variant="h5"
                                    sx={{ color: '#fff', fontWeight: 'bold' }}
                                >
                                    About Us
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Container maxWidth="md">
                        <Grid container spacing={3} py={5}>
                            <Grid item lg={6} md={12} sm={12}>
                                <Typography variant="h4">
                                    About Vrit Technologies.
                                </Typography>
                            </Grid>
                            <Grid item lg={6} md={12} sm={12}>
                                <Typography variant="h4">About us</Typography>
                            </Grid>
                        </Grid>
                    </Container>
                    <Container>
                        <Typography color="textSecondary" align="left" py={2}>
                            Vrit Technologies is believed to be one of the
                            popular providers of IT services in Nepal. The
                            company is equipped with fine infrastructure and
                            ideal technology support. Vrit Tech has a broader
                            distribution network so that the business
                            requirements of the partners can be satisfied. Our
                            primary asset is our team of talented, enthusiastic
                            and committed individuals.
                        </Typography>
                    </Container>
                    <Container>
                        <Typography color="textSecondary" align="left" py={2}>
                            Bibek and Umesh Subedi the two co-founders started
                            Vrit Technologies as an information technology
                            startup in 2019. Since the last three years, Vrit
                            technology has helped numerous startups and
                            businesses grow and scale by delivering digital
                            services such as web development, digital marketing,
                            cybersecurity solutions, IoT and business
                            automation, and more.
                        </Typography>
                    </Container>
                    <Container>
                        <Typography color="textSecondary" align="left" py={2}>
                            Our company’s vision is to be an ideal global
                            services and IT Solutions Company. We would attain
                            prominent place in the market by comprehending the
                            needs of customers and working with our partners to
                            provide solutions that real business value.
                        </Typography>
                    </Container>
                    <Container>
                        <Typography variant="subtitle2" align="left" py={2}>
                            If you’re looking for any IT Support or Solutions
                            let’s work together 😊
                        </Typography>
                    </Container>
                </Grid>
            </main>
        </>
    );
};

export default AboutUs;
