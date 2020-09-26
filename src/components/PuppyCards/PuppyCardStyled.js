import styled from "styled-components"

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 20px;
  grid-column-gap: clamp(10px, 15px, 30px);
  padding-top: 70px;
  justify-content: space-between;
  max-width: 1400px;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    justify-content: space-around;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding-top: 10px;
  }
`

export const PuppyCardStyled = styled.div`
  background: white;
  border: solid 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 4px 0 rgba(204, 204, 204, 0.5);
  min-width: 200px;
  max-width: 100%;
  & > img {
    width: 100%;
  }
  h2 {
    font-family: "Montserrat", sans-serif;
  }
  div {
    padding: 0 15px 15px 15px;
  }
`
export const PuppyInfo = styled.h5`
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 0.75em;
  border-bottom: dotted 1px #333333;
  padding-bottom: 5px;
  margin-bottom: 5px;
  span {
    padding: 0 2px;
  }
`

export const PuppyNameBread = styled.h6`
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  font-size: 0.9em;
  padding-bottom: 5px;
  span {
    font-weight: 400;
  }
`

export const PuppyLocation = styled.p`
  font-family: "Montserrat", sans-serif;
  background: #d45224;
  color: white;
  border-radius: 3px;
  display: inline;
  font-size: 0.68em;
  padding: 2px 6px;
  font-weight: 500;
`
