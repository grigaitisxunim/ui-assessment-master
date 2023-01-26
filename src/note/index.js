import React, { useState } from 'react';
import Button from '../components/Button';
import { Div } from '../components/div/styled';
import Input from '../components/Input';
import Textarea from '../components/TextArea';

function NoteApp() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setNotes([
      ...notes,
      { title, body }
    ]);
    setTitle('');
    setBody('');
  }

  function handleRemove(title) {
    setNotes(notes.filter(note => note.title !== title));
  }

  return (
    <Div>
      <Div>
      <h1>Note App</h1>
      <form onSubmit={handleSubmit}>
        <Input value={title} onChange={e => setTitle(e.target.value)} placeholder="Note Title" />
        <br />
        <Textarea value={body} onChange={e => setBody(e.target.value)} placeholder="Note Body"></Textarea>
        <br />
        <Button Text="Save Note" type="submit" />
      </form>
      </Div>
      <br />
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <Button Text="Delete Note" onClick={() => handleRemove(note.title)}/>
          </li>
        ))}
      </ul>
    </Div>
  );
}

export default NoteApp;
