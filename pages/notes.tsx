import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import NoteCard from '../components/NoteCard';

const Notes = () => {
  const router = useRouter();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // prettier-ignore
    fetch(`http://localhost:8000/notes`, {
      method: 'GET',
    }).then((res) => res.json()
      .then((data) => setNotes(data)
    ));
  }, []);

  const deleteNote = (id: number) => {
    // delete form db
    fetch(`http://localhost:8000/notes/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(() => {
        // update state
        setNotes(notes.filter((note) => note.id != id));
      });
  };

  return (
    <Container>
      <Grid 
        mt={10}
        container
        spacing={3}>
        {notes.length &&
          notes.map((note) => (
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              key={note.id}>
              <NoteCard
                key={note.id}
                note={note}
                deleteNote={deleteNote}
              />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Notes;
