import React, { useState } from "react";
import {AsyncPaginate} from "react-select-async-paginate"
import { GEO_API_URL, geoApiOptions } from "../../api";
import styled from 'styled-components';

const StyledAsyncPaginate = styled(AsyncPaginate)`
.css-13cymwt-control{
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 40px;
  }
`;

const Search = ({onSearchChange}) => {

  const [search, setSearch] = useState("")

  const handleOneChange = (searchData) =>{

    setSearch(searchData)
    onSearchChange(searchData)

  }
  return (
   <StyledAsyncPaginate
   placeholder="Search for your preffered city"
   onChange={handleOneChange}
  debounceTimeout={600}
   loadOptions={loadOptions}
   value={search}
   className="search-input"
   />
  )
}

const loadOptions = (inputValue) => {
  return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
    .then((response) => {
      // Check if the fetch was successful
      if (!response.ok) {
        throw new Error(`Failed to fetch data (HTTP status: ${response.status})`);
      }
      return response.json();
    })
    .then((response) => {
      // Check if the response has the expected data property
      if (response.data) {
        return {
          // Map the city data to an options array
          options: response.data.map((city) => ({
            value: `${city.latitude}, ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          })),
        };
      } else {
        throw new Error('Invalid response format: Missing data property');
      }
    })
    .catch((error) => {
      // Log an error if something goes wrong during the fetch
      console.error('Error fetching data:', error);
      throw error;
    });
};

// Export the Search component
export default Search


