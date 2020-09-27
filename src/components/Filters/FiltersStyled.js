import styled from "styled-components"

export const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: visible;
  min-height: 50px;
  position: absolute;
  width: 100%;
  max-width: 1400px;
  & > h2 {
    padding-top: 5px;
    color: #44525d;
  }
  @media screen and (max-width: 1399px) {
    max-width: 90vw;
    margin: auto;
    & > h2 {
      font-size: 1.4em;
    }
  }
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    & > h2 {
      text-align: center;
      padding-bottom: 10px;
    }
  }
  @media screen and (max-width: 768px) {
    position: relative;
    width: 95%;
    margin: auto;
    & > div {
      flex-direction: column;
    }
  }
`

export const FilterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const FilterButton = styled.button`
  border: solid 1px rgba(0, 0, 0, 0.1);
  background: none;
  padding: 10px 0;
  font-weight: 500;
  background: white;
  color: #333333;
  &:active,
  &:focus {
    outline: none;
    border: solid 1px #d45224;
  }
  &::after {
    content: "";
    border: solid #333333;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transition: all 0.2s ease;
    transform: ${props => (props.active ? "rotate(225deg)" : "rotate(45deg)")};
    margin-left: 10px;
    margin-bottom: ${props => (props.active ? "0" : "4px")};
  }
`

export const FilterOuter = styled.div`
  min-width: 30%;
  width: 240px;
  max-width: 300px;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`

export const FilterOptions = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  max-height: 400px;
  overflow-y: auto;
  transition: transform 0.15s linear;
  transform-origin: top center;
  height: ${props => (props.active ? "initial" : 0)};
  transform: ${props => (props.active ? "scaleY(1)" : "scaleY(0)")};
  background: white;
  padding: 10px;
  border: solid 1px rgba(0, 0, 0, 0.2);
  label {
    font-size: 0.75em;
    padding: 5px 0;
    input {
      margin-right: 10px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 95%;
  }
`

export const FilterCheckbox = styled.label`
  font-size: 0.75em;
  padding: 5px 0;
  &::before {
    content: "";
    display: inline-block;
    vertical-align: bottom;
    width: 0.8rem;
    height: 0.7rem;
    margin-right: 0.3rem;
    border-radius: 20%;
    border-style: solid;
    border-width: 0.1rem;
    border-color: rgba(0, 0, 0, 0.2);
    background: ${props => (props.checked ? "#d45224" : "none")};
  }
  input {
    display: none;
    margin-right: 10px;
  }
`
