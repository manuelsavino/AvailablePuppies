import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hero } from "../components/Hero"
import { Container } from "../components/common/layoutStyled"
import {
  PuppyDetailsContainer,
  PuppyDetailsImage,
  PuppyDetailsInfo,
} from "../components/PuppyDetails/PuppyDetailsStyled"

export default function puppyDetails(props) {
  const pup = props.location.state
  if (pup) {
    return (
      <Layout>
        <SEO title="Home" />
        <Hero height="200px" />
        <Container>
          <PuppyDetailsContainer>
            <PuppyDetailsImage
              src={
                pup.Photo
                  ? `${pup.Photo.BaseUrl}${pup.Photo.Size500}`
                  : `https://www.petlandflorida.com/wp-content/themes/petland/assets/images/no-available.png`
              }
            />
            <PuppyDetailsInfo>
              <h2>{pup.PetName}</h2>
              <div>
                <h3>Details</h3>
                <ul>
                  <li>
                    <span>Breed</span>
                    <span>{pup.BreedName}</span>
                  </li>
                  <li>
                    <span>Color</span>
                    <span>{pup.Coloring}</span>
                  </li>
                  <li>
                    <span>Location</span>
                    <span>
                      {pup.Location.charAt(0).toUpperCase() +
                        pup.Location.slice(1)}
                    </span>
                  </li>
                  <li>
                    <span>Gender</span>
                    <span>{pup.Gender}</span>
                  </li>
                  <li>
                    <span>DOB</span>
                    <span>{pup.BirthDate}</span>
                  </li>
                  <li>
                    <span>Ref ID</span>
                    <span>{pup.PetId}</span>
                  </li>
                </ul>
              </div>
            </PuppyDetailsInfo>
          </PuppyDetailsContainer>
        </Container>
      </Layout>
    )
  } else {
    return <h1>Something went wrong...</h1>
  }
}
