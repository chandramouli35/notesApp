// Write your code here
import {useState} from 'react'
import {v4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  AppContainer,
  Heading,
  CardContainer,
  FormContainer,
  TitleInput,
  NoteInput,
  SubmitButton,
  NotesContainer,
  Image,
  NoNotesHeading,
  NoNotesDescription,
  ListContainer,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [noteText, setNoteText] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeTitle = event => setTitle(event.target.value)

  const onChangeDescription = event => setNoteText(event.target.value)

  const onSubmitAdd = event => {
    event.preventDefault()
    const newNote = {
      id: v4,
      title,
      noteText,
    }
    setNotesList(prevState => [...prevState, newNote])
    setTitle('')
    setNoteText('')
  }

  return (
    <AppContainer>
      <Heading>Notes</Heading>
      <CardContainer>
        <FormContainer onSubmit={onSubmitAdd}>
          <TitleInput
            placeholder="Title"
            type="text"
            value={title}
            onChange={onChangeTitle}
          />
          <NoteInput
            placeholder="Take a Note..."
            type="text"
            value={noteText}
            onChange={onChangeDescription}
          />
          <SubmitButton type="submit">Add</SubmitButton>
        </FormContainer>
      </CardContainer>
      {notesList.length < 1 ? (
        <NotesContainer>
          <Image
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <NoNotesHeading>No Notes Yet</NoNotesHeading>
          <NoNotesDescription>
            Notes you add will appear here
          </NoNotesDescription>
        </NotesContainer>
      ) : (
        <ListContainer>
          {notesList.map(eachItem => (
            <NoteItem NoteItemDetails={eachItem} key={eachItem.id} />
          ))}
        </ListContainer>
      )}
    </AppContainer>
  )
}

export default Notes
