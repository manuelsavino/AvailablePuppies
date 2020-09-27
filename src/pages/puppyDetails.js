import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hero } from "../components/Hero"
import { Container } from "../components/common/layoutStyled"
import {
  PuppyDetailsContainer,
  PuppyDetailsImage,
  PuppyDetailsInfo,
  PuppyDetailsCta,
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
              <PuppyDetailsCta>
                <button>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path>
                  </svg>
                  Request More Info
                </button>
                <button>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.712,13.288c-0.391-0.391-1.023-0.391-1.414,0l-1.597,1.596c-0.824-0.245-2.166-0.771-2.99-1.596 c-0.874-0.874-1.374-2.253-1.594-2.992l1.594-1.594c0.391-0.391,0.391-1.023,0-1.414l-4-4c-0.375-0.375-1.039-0.375-1.414,0 l-2.709,2.71C2.206,6.378,1.991,6.902,2,7.435c0.022,1.423,0.396,6.367,4.297,10.268C10.195,21.6,15.142,21.977,16.566,22 c0.005,0,0.023,0,0.028,0c0.528,0,1.027-0.208,1.405-0.586l2.712-2.712c0.391-0.391,0.391-1.023,0-1.414L16.712,13.288z M16.585,20c-1.248-0.021-5.518-0.356-8.874-3.712C4.343,12.92,4.019,8.636,4,7.414l2.004-2.005L8.59,7.995L7.297,9.288 C7.059,9.526,6.957,9.87,7.026,10.2c0.024,0.115,0.611,2.842,2.271,4.502s4.387,2.247,4.502,2.271 c0.331,0.071,0.673-0.032,0.912-0.271l1.293-1.293l2.586,2.586L16.585,20z"></path>
                    <path d="M15.795 6.791L13.005 4 13.005 10.995 20 10.995 17.209 8.205 21.712 3.702 20.298 2.288z"></path>
                  </svg>
                  Request More Info
                </button>
              </PuppyDetailsCta>
              <PuppyDetailsCta>
                <p>OR RESERVE YOUR PUPPY PLAYTIME</p>
              </PuppyDetailsCta>
            </PuppyDetailsInfo>
          </PuppyDetailsContainer>
        </Container>
      </Layout>
    )
  } else {
    return <h1>Something went wrong...</h1>
  }
}
