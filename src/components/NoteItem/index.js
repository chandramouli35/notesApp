// Write your code here
import {ListItemContainer, TitleHeading, Description} from './styledComponents'

const NoteItem = props => {
  const {NoteItemDetails} = props
  const {title, noteText} = NoteItemDetails

  return (
    <ListItemContainer>
      <TitleHeading>{title}</TitleHeading>
      <Description>{noteText}</Description>
    </ListItemContainer>
  )
}

export default NoteItem
