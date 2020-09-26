import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PuppyCard from "../components/PuppyCards"
import { Container } from "../components/common/layoutStyled"
import { CardContainer } from "../components/PuppyCards/PuppyCardStyled"
import Filters from "../components/Filters"

const IndexPage = () => {
  const [pups, setPups] = useState([])
  const [loading, setLoading] = useState(true)
  const [displayPups, setDisplayPups] = useState([])
  const [breeds, setBreeds] = useState([])
  const [displayBreeds, setDisplayBreeds] = useState([])
  const [locations, setLocations] = useState([])
  const [locationFilters, setLocationFilters] = useState({})
  const [breedFilters, setBreedFilters] = useState({})
  const [genderFilters, setGenderFilters] = useState({
    Male: false,
    Female: false,
  })
  const [typeFilters, setTypeFilters] = useState({
    Dog: false,
    Cat: false,
  })

  const handleCheckfilterChange = e => {
    const filterType = e.target.getAttribute("data-type")
    switch (filterType) {
      case "location":
        setLocationFilters({
          ...locationFilters,
          [e.target.name]: !locationFilters[e.target.name],
        })
        break
      case "breed":
        setBreedFilters({
          ...breedFilters,
          [e.target.name]: !breedFilters[e.target.name],
        })
        break
      case "gender":
        setGenderFilters({
          ...genderFilters,
          [e.target.name]: !genderFilters[e.target.name],
        })
        break
      case "type":
        setTypeFilters({
          ...typeFilters,
          [e.target.name]: !typeFilters[e.target.name],
        })
    }
  }

  useEffect(() => {
    const fetchPups = async () => {
      const res = await fetch(
        "https://www.petlandflorida.com/wp-json/petland/v1/available-puppies"
      )
      const { puppies, breeds } = await res.json()

      setPups(puppies)
      setDisplayPups(puppies)
      const breedsArr = Object.keys(breeds).map(breed => breeds[breed])
      setBreeds(breedsArr)
      setDisplayBreeds(breedsArr)
      const locationsSet = new Set()

      puppies.forEach(pup => {
        locationsSet.add(pup.Location)
      })
      setLocations(Array.from(locationsSet))
      setLoading(false)
    }
    fetchPups()
  }, [])

  const applyFilters = () => {
    const locationFilterArr = Object.keys(locationFilters).filter(
      loc => locationFilters[loc] === true
    )
    const breedFiltersArr = Object.keys(breedFilters).filter(
      breed => breedFilters[breed] === true
    )

    const genderFiltersArr = Object.keys(genderFilters).filter(
      gender => genderFilters[gender] === true
    )

    const typeFiltersArr = Object.keys(typeFilters).filter(
      type => typeFilters[type] === true
    )
    let filteredData = [...pups]
    if (locationFilterArr.length) {
      filteredData = filteredData.filter(pup =>
        locationFilterArr.includes(pup.Location)
      )
    }
    if (breedFiltersArr.length) {
      filteredData = filteredData.filter(pup =>
        breedFiltersArr.includes(pup.BreedName)
      )
    }

    if (genderFiltersArr.length) {
      filteredData = filteredData.filter(pup =>
        genderFiltersArr.includes(pup.Gender)
      )
    }

    if (typeFiltersArr.length) {
      filteredData = filteredData.filter(pup =>
        typeFiltersArr.includes(pup.PetType)
      )
    }

    setDisplayPups(filteredData)
  }

  useEffect(() => {
    const typeFiltersArr = Object.keys(typeFilters).filter(
      type => typeFilters[type] === true
    )
    if (typeFiltersArr.length === 1) {
      const tempBreeds = breeds.filter(breed => {
        return typeFiltersArr.includes(breed.PetType)
      })

      setDisplayBreeds(tempBreeds)
    } else {
      setDisplayBreeds(breeds)
    }
    // console.log(typeFiltersArr.length)
  }, [typeFilters])

  useEffect(() => {
    applyFilters()
  }, [locationFilters, breedFilters, genderFilters, typeFilters])

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Filters
          handleCheckfilterChange={handleCheckfilterChange}
          locations={locations}
          locationFilters={locationFilters}
          typeFilters={typeFilters}
          genderFilters={genderFilters}
          displayBreeds={displayBreeds}
          breedFilters={breedFilters}
        />

        {displayPups.length ? (
          <CardContainer>
            {displayPups.map(pup => {
              return <PuppyCard key={pup.PetId} pup={pup}></PuppyCard>
            })}
          </CardContainer>
        ) : loading ? (
          <h2>Loading</h2>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              paddingTop: "20px",
              color: "#333333",
            }}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 576 512"
              height="20em"
              width="20em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M298.06,224,448,277.55V496a16,16,0,0,1-16,16H368a16,16,0,0,1-16-16V384H192V496a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V282.09C58.84,268.84,32,233.66,32,192a32,32,0,0,1,64,0,32.06,32.06,0,0,0,32,32ZM544,112v32a64,64,0,0,1-64,64H448v35.58L320,197.87V48c0-14.25,17.22-21.39,27.31-11.31L374.59,64h53.63c10.91,0,23.75,7.92,28.62,17.69L464,96h64A16,16,0,0,1,544,112Zm-112,0a16,16,0,1,0-16,16A16,16,0,0,0,432,112Z"></path>
            </svg>
            <h2>No Results Found</h2>
          </div>
        )}
      </Container>
    </Layout>
  )
}

export default IndexPage
