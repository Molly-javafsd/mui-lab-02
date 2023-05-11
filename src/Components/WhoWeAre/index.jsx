import React from 'react'
import {Typography, Box, Container, Grid, Card, CardContent} from '@mui/material'

const WhoWeAre = () => {
  return (

      <Box py={3} bgcolor="grey.200">
        <Container maxWidth="md">
            <Typography variant='h6' align='center' gutterBottom>
                Who We Are
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Card sx={{height: '100%'}}>
                        <CardContent>
                            <Typography variant='h6' gutterBottom>
                                Our Story
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt ipsa delectus quos tenetur odio quas quaerat vel culpa dignissimos,
                                 eum assumenda, necessitatibus ullam dolorem veritatis accusantium earum impedit autem. Corporis.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card sx={{height:'100%'}}>
                        <CardContent>
                            <Typography>
                                Our Philosophy
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat ipsum necessitatibus quam architecto odit blanditiis voluptas maxime dolores natus facere quis obcaecati a illo, aperiam aut, quaerat pariatur debitis nulla!

                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
      </Box>
  
  );
};

export default WhoWeAre;
