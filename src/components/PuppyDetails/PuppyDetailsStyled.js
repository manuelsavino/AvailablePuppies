import styled from "styled-components"

export const PuppyDetailsContainer = styled.div`
  width: 90%;
  margin: -80px auto;
  background: white;
  display: flex;
  box-shadow: 0 2px 4px 0 rgba(204, 204, 204, 0.5);
`
export const PuppyDetailsImage = styled.img`
  width: 55%;
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
`
