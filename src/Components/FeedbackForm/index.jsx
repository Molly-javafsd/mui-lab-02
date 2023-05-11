import React from 'react'
import {Typography, TextField, Button, Box} from '@mui/material'

export default function FeedbackForm() {
const handleSubmit =(e) =>{
    e.preventDefault();
}
    return (
    <>
      <Box ml={3} py={3}>
        <Typography variant='h6' align='center' gutterBottom>
            Any Suggestions
        </Typography>
        <form onSubmit={handleSubmit}>
            <TextField 
            id='name'
            label="Your Name"
            variant='outlined'
            margin='normal'
            fullWidth
            required
            />
               <TextField 
            id='email'
            label="Your Email"
            variant='outlined'
            margin='normal'
            fullWidth
            required
            />
               <TextField 
            id='feedback'
            label="Your Feedback"
            variant='outlined'
            margin='normal'
            multiline
            rows={4}
            fullWidth
            required
            />
            <Button type='submit' variant='contained' color='primary' fullWidth>
                Submit Feedback
            </Button>
        </form>
      </Box>
    </>
  )
}
