import styled from "styled-components"
import DefaultHero from "../../images/available-puppies-desktop.jpg"

export const Hero = styled.div`
  width: 100%;
  height: ${props => props.height || "600px"};
  background: url(${DefaultHero});
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
  @media screen and (max-width: 1200px) {
    margin-bottom: 50px;
  }
`
