// Style your elements here
import styled from 'styled-components'

export const ListItemContainer = styled.li`
  list-style: none;
  box-shadow: 0px 4px 16px #aab8c8;
  width: 30%;
  padding: 15px;
  border-radius: 10px;
  margin-top: 20px;
  margin: 10px;
  @media screen and (max-width: 768px) {
    width: 40%;
  }
`
export const TitleHeading = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
  color: #334155;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`
export const Description = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  color: #475569;
  @media screen and (max-width: 768px) {
    font-size: 11px;
  }
`
