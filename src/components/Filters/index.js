import React, { useState } from "react"
import {
  FilterBar,
  FilterContainer,
  FilterOptions,
  FilterButton,
  FilterOuter,
} from "./FiltersStyled"

export default function Filters({
  handleCheckfilterChange,
  locations,
  locationFilters,
  typeFilters,
  genderFilters,
  displayBreeds,
  breedFilters,
}) {
  const [activeMenu, setActiveMenu] = useState({})

  const handleMenuToggle = e => {
    const checkIfActive = activeMenu[e.target.name]
    if (checkIfActive === true) {
      setActiveMenu({})
    } else {
      setActiveMenu({
        [e.target.name]: true,
      })
    }
  }
  return (
    <FilterBar>
      <h2>FILTERS</h2>
      <FilterContainer>
        <FilterOuter>
          <FilterButton
            name="location"
            onClick={handleMenuToggle}
            style={{ width: "100%" }}
            active={activeMenu.location || false}
          >
            Location
          </FilterButton>
          <FilterOptions active={activeMenu.location || false}>
            {locations &&
              locations.map(loc => (
                <label key={loc}>
                  <input
                    type="checkbox"
                    name={loc}
                    data-type="location"
                    onChange={handleCheckfilterChange}
                    checked={locationFilters[loc] || false}
                  />
                  {loc.charAt(0).toUpperCase() + loc.slice(1)}
                </label>
              ))}
          </FilterOptions>
        </FilterOuter>
        <FilterOuter>
          <FilterButton
            name="type"
            onClick={handleMenuToggle}
            style={{ width: "100%" }}
            active={activeMenu.type || false}
          >
            Pet Type
          </FilterButton>
          <FilterOptions active={activeMenu.type || false}>
            {displayBreeds &&
              Object.keys(typeFilters).map(type => (
                <label key={type}>
                  <input
                    type="checkbox"
                    name={type}
                    data-type="type"
                    onChange={handleCheckfilterChange}
                    checked={typeFilters[type]}
                  />
                  {type}
                </label>
              ))}
          </FilterOptions>
        </FilterOuter>
        <FilterOuter>
          <FilterButton
            name="gender"
            onClick={handleMenuToggle}
            style={{ width: "100%" }}
            active={activeMenu.gender || false}
          >
            Gender
          </FilterButton>
          <FilterOptions active={activeMenu.gender || false}>
            {displayBreeds &&
              Object.keys(genderFilters).map(gender => (
                <label key={gender}>
                  <input
                    type="checkbox"
                    name={gender}
                    data-type="gender"
                    onChange={handleCheckfilterChange}
                    checked={genderFilters[gender]}
                  />
                  {gender}
                </label>
              ))}
          </FilterOptions>
        </FilterOuter>
        <FilterOuter>
          <FilterButton
            name="breed"
            onClick={handleMenuToggle}
            style={{ width: "100%" }}
            active={activeMenu.breed || false}
          >
            Breed
          </FilterButton>
          <FilterOptions active={activeMenu.breed || false}>
            {displayBreeds &&
              displayBreeds.map(breed => (
                <label key={breed.BreedName}>
                  <input
                    type="checkbox"
                    name={breed.BreedName}
                    data-type="breed"
                    onChange={handleCheckfilterChange}
                    checked={breedFilters[breed.BreedName] || false}
                  />
                  {breed.BreedName}
                </label>
              ))}
          </FilterOptions>
        </FilterOuter>
      </FilterContainer>
    </FilterBar>
  )
}
