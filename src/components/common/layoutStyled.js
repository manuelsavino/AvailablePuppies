import styled from "styled-components"

export const Container = styled.div`
  max-width: 1400px;
  margin: auto;
  @media screen and (max-width: 1399px) {
    max-width: 90vw;
    margin: auto;
  }
`

export const Heading = styled.h1`
  font-size: 2.5em;
  font-weight: 700;
  color: #44525d;
  line-height: 1;
  span {
    display: block;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 3px;
  }
`
