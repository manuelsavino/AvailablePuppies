import React, { useState } from "react"
import {
  FilterBar,
  FilterContainer,
  FilterOptions,
  FilterButton,
  FilterOuter,
  FilterCheckbox,
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
      <h2>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z"></path>
        </svg>
        Filter By
      </h2>
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
                <FilterCheckbox
                  key={loc}
                  checked={locationFilters[loc] || false}
                >
                  <input
                    type="checkbox"
                    name={loc}
                    data-type="location"
                    onChange={handleCheckfilterChange}
                    checked={locationFilters[loc] || false}
                  />
                  {loc.charAt(0).toUpperCase() + loc.slice(1)}
                </FilterCheckbox>
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
                <FilterCheckbox key={type} checked={typeFilters[type]}>
                  <input
                    type="checkbox"
                    name={type}
                    data-type="type"
                    onChange={handleCheckfilterChange}
                    checked={typeFilters[type]}
                  />
                  {type}
                </FilterCheckbox>
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
                <FilterCheckbox key={gender} checked={genderFilters[gender]}>
                  <input
                    type="checkbox"
                    name={gender}
                    data-type="gender"
                    onChange={handleCheckfilterChange}
                    checked={genderFilters[gender] || false}
                  />
                  {gender}
                </FilterCheckbox>
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
                <FilterCheckbox
                  key={breed.BreedName}
                  checked={breedFilters[breed.BreedName] || false}
                >
                  <input
                    type="checkbox"
                    name={breed.BreedName}
                    data-type="breed"
                    onChange={handleCheckfilterChange}
                    checked={breedFilters[breed.BreedName] || false}
                  />
                  {breed.BreedName}
                </FilterCheckbox>
              ))}
          </FilterOptions>
        </FilterOuter>
      </FilterContainer>
    </FilterBar>
  )
}
