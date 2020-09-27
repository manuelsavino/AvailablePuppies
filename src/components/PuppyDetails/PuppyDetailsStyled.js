import styled from "styled-components"

export const PuppyDetailsContainer = styled.div`
  width: 90%;
  margin: -80px auto;
  background: white;
  display: flex;
  box-shadow: 0 2px 4px 0 rgba(204, 204, 204, 0.5);
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: -120px auto;
  }
`
export const PuppyDetailsImage = styled.img`
  width: 55%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const PuppyDetailsInfo = styled.div`
  width: 45%;
  box-sizing: border-box;
  h2 {
    font-size: 2.8rem;
    background: #d45224;
    color: white;
    padding: 10px 20px;
    font-weight: 500;
  }
  h3 {
    font-size: 1.8rem;
    padding-bottom: 10px;
  }
  div {
    padding: 20px;
    ul {
      list-style: none;
      li {
        list-style: none;
        font-size: 0.9rem;
        padding-bottom: 10px;
        & > :first-child {
          font-weight: 600;
          min-width: 90px;
          display: inline-block;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.5rem;
    }
  }
`

export const PuppyDetailsCta = styled.div`
  display: flex;
  justify-content: center;
  button {
    background-color: #d45224;
    border: none;
    background-image: linear-gradient(150deg, #44525d 50%, transparent 50%);
    background-position: 100%;
    background-size: 400%;
    transition: background 500ms ease-in-out;
    position: relative;
    color: #fff;
    padding: 10px 15px;
    border-radius: 5px;
    margin-top: 10px;
    position: relative;
    font-size: 1rem;
    text-decoration: none;
    margin-right: 10px;
    &:hover {
      background-position: 0;
      cursor: pointer;
    }
    svg {
      margin-right: 5px;
    }
  }
  p {
    color: #d45224;
    font-weight: 600;
  }
  @media screen and (max-width: 768px) {
    font-size: clamp(0.5em, 0.8em, 1em);
  }
`
