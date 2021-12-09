import styled, { css } from "styled-components"
import SearchBox from "./search-box"

const open = css`
  width: 10em;
  background: transparent;
  cursor: text;
  margin-left: -1.6em;
  padding-left: -1.6em;
  color:white;
  border-bottom:solid 2px;
  border-top:none;
  border-right:none;
  border-left:none;
`

const closed = css`
  width: 9em;
  color:white;
  background: transparent;
  cursor: pointer;
  margin-left: -1.5em;
  padding-left: 1.5em;
`

export default styled(SearchBox)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 0;
  padding:20px 8%;

  .SearchInput {
    outline: none;
    border: ${({ hasFocus }) => (hasFocus ? "" : "none")};
    font-size: 1em;
    transition: 100ms;
    border-radius: 2px;
    color: white;
    ::placeholder{
color:white;
opacity:0.4;
    }
    
    ${({ hasFocus }) => (hasFocus ? open : closed)}
  }

  .SearchInput :hover{
  border-bottom: solid 2px;
  }

  .SearchIcon {
    width: 1em;
    margin: 0.3em;
    color: white;
    margin:3px 7px;
    pointer-events: none;
    display:${({ hasFocus }) => (hasFocus ? "none" : "")};
    
  }
`