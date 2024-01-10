// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 60px;
  padding-top: 30px;
  @media screen and (max-width: 768px) {
    padding: 20px;
    padding-left: 30px;
  }
`

export const Heading = styled.h1`
  font-size: 40px;
  font-family: 'Bree Serif';
  color: #4c63b6;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`
export const CardContainer = styled.div`
  box-shadow: 0px 4px 16px #aab8c8;
  padding: 30px;
  border-radius: 10px;
  width: 100%;
  margin-top: 40px;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`

export const FormContainer = styled.form`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`

export const TitleInput = styled.input`
  height: 30px;
  width: 350px;
  padding: 10px;
  outline: none;
  border-width: 0px;
  cursor: pointer;
  margin-bottom: 10px;
  font-size: 14px;
`
export const NoteInput = styled.textarea`
  height: 100px;
  width: 100%;
  padding: 10px;
  outline: none;
  border-width: 0px;
  cursor: pointer;
  font-size: 14px;
`
export const SubmitButton = styled.button`
  background-color: #4c63b6;
  height: 30px;
  width: 60px;
  outline: none;
  border-width: 0px;
  cursor: pointer;
  font-size: 14px;
  color: #ffffff;
  align-self: flex-end;
  margin-top: 15px;
`

export const NotesContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Image = styled.img`
  width: 10%;
  @media screen and (max-width: 768px) {
    width: 30%;
    padding: 20px;
  }
`
export const NoNotesHeading = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
  color: #334155;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`
export const NoNotesDescription = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  color: #475569;
  @media screen and (max-width: 768px) {
    font-size: 11px;
  }
`
export const ListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 0px;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`
