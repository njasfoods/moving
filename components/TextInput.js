import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Search } from '@mui/icons-material';

const apiKey = '0ec14fb8885e4d44b7025b2304762e06';

const LocationAutocomplete = ({ onSelectLocation, inputName }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const getAddressCoordinates = async (address, inputName) => {
    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          address
        )}&key=${apiKey}`
      );

      if (!response.ok) {
        throw new Error('Unable to fetch coordinates');
      }

      const data = await response.json();

      if (data.results.length > 0) {
        const coordinates = data.results[0].geometry;
        // console.log('Coordinates:', coordinates, inputName);
        onSelectLocation({ coordinates, inputName });
        return coordinates;
      } else {
        throw new Error('No results found');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await axios.get(
          `https://geocode.search.hereapi.com/v1/autocomplete?q=${query}&apiKey=${process.env.NEXT_PUBLIC_HERE_API_KEY}`
        );

        if (response.data && response.data.items) {
            if (response.data && response.data.items) {
                // Filter out the selected location from the suggestions
                const filteredSuggestions = response.data.items.filter(
                  (location) => location.address.label !== query
                );
                setSuggestions(filteredSuggestions);
              }
        }
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    };

    if (query.trim() !== '') {
      fetchSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleSelectLocation = async (location) => {
    setQuery(location.address.label);
    getAddressCoordinates(await location.title, inputName)
    setSuggestions([]);
    // Add any additional logic needed when a location is selected
  };

  return (
    <div>
      <input
        type="text"
        className='p-1.5 w-full rounded border'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type to search..."
      />
      {suggestions.length > 0 && (
        <ul className='bg-white p-1 text-gray-900 max-h-52 overflow-x-scroll border'>
          {suggestions.map((location) => (
            <li
              className='mb-2 flex space-x-2 cursor-pointer text-sm'
              key={location.id}
              onClick={() => handleSelectLocation(location)}
            >
              <Search />
              <span>{location.address.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationAutocomplete;
