import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import React from 'react';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';

const NoteCard = ({ note, deleteNote }) => {
  return (
    <Card elevation={3}>
      <CardHeader
        action={
          <IconButton onClick={() => deleteNote(note.id)}>
            <DeleteOutlined />
          </IconButton> 
        }
        title={note.title}
        subheader={note.category}
      />
      <CardContent>
        <Typography
          variant='body2'
          color='textSecondary'>
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
