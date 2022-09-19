import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import classes from '../styles/Create.module.scss';
import Router from 'next/router';

const Create = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState('todos');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    !title && setTitleError(true);
    !details && setDetailsError(true);

    if (title && details) {
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          title,
          details,
          category,
        }),
      }).then(() => Router.push('/'));
    }
  };

  return (
    <Container sx={{ 'margin-top': 10 }}>
      <Typography
        variant='h6'
        component='h1'
        gutterBottom
        color='textSecondary'>
        Create a New Note
      </Typography>
      <form
        onSubmit={handleSubmit}
        noValidate
        autoComplete='off'>
        <TextField
          className={classes.field}
          id='outlined-basic'
          label='Note Title'
          variant='outlined'
          color='secondary'
          required
          fullWidth
          onChange={(e) => setTitle(e.target.value)}
          error={titleError}
        />
        <TextField
          className={classes.field}
          id='outlined-basic'
          label='Details'
          variant='outlined'
          color='secondary'
          required
          fullWidth
          multiline
          rows={4}
          onChange={(e) => setDetails(e.target.value)}
          error={detailsError}
        />
        <FormControl>
          <FormLabel>Note Categorey</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel
              value='money'
              control={<Radio />}
              label='Money'
            />
            <FormControlLabel
              value='todos'
              control={<Radio />}
              label='Todos'
            />
            <FormControlLabel
              value='reminders'
              control={<Radio />}
              label='Reminders'
            />
            <FormControlLabel
              value='work'
              control={<Radio />}
              label='Work'
            />
          </RadioGroup>
        </FormControl>
        <Button
          sx={{ display: 'block' }}
          type='submit'
          variant='contained'>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Create;
