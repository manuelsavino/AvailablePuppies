import React from "react"

import {
  PuppyCardStyled,
  PuppyNameBread,
  PuppyInfo,
  PuppyLocation,
} from "./PuppyCardStyled"

export default function PuppyCard({ pup }) {
  const imageUrl = pup.Photo
    ? `${pup.Photo.BaseUrl}${pup.Photo.Size300}`
    : `https://www.petlandflorida.com/wp-content/themes/petland/assets/images/no-available.png`

  return (
    <PuppyCardStyled
      to="/puppyDetails"
      data-sal="slide-up"
      data-sal-delay="300"
      data-sal-easing="ease-out-back"
    >
      <img src={imageUrl} />
      <div>
        <PuppyInfo>
          <span>{pup.PetType}</span>•<span>{pup.Gender}</span>•
          <span>REF ID: {pup.PetId}</span>•<span>{pup.BirthDate}</span>
        </PuppyInfo>
        <PuppyNameBread>
          {pup.PetName} • <span>{pup.BreedName}</span>
        </PuppyNameBread>
        <PuppyLocation>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 384 512"
            height=".8em"
            width=".8em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
          </svg>
          Location:{" "}
          {pup.Location.charAt(0).toUpperCase() + pup.Location.slice(1)}
        </PuppyLocation>
      </div>
    </PuppyCardStyled>
  )
}
