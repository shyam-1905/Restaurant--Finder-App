'use client';
import React from 'react'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {notFound,useRouter} from 'next/navigation'
import { normalizeString, isEqualNormalized } from '@/app/utils/utils';

// Component for displaying restaurant results based on city and state
const resultpage = ({params}) => {
  const router = useRouter();
  // Normalize city and state from URL parameters
  let city =  normalizeString(params.slug[0])
  let state =  normalizeString(params.slug[1])
  // State for storing filtered restaurants, loading status, and validity of location
  const [filteredRes, setFilteredRes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Import restaurant data
        const result = await import('../../data/restaurants.json');
        // Create sets of unique cities and states
        const cities = new Set(result.default.map(restaurant => normalizeString(restaurant.city)));
        const states = new Set(result.default.map(restaurant => normalizeString(restaurant.state)));

        // Validate if city and state exist in the data
        if (!cities.has(city) || !states.has(state)) {
          setIsValid(false);
          setLoading(false)
        }
        // Filter restaurants based on city and state
        const filteredRestaurants = result.default.filter(
          restaurant =>
            isEqualNormalized(restaurant.city, city) &&
            isEqualNormalized(restaurant.state, state)
        );
        setFilteredRes(filteredRestaurants);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
        console.log("finally")
      }
    };
    fetchData();
  }, [city, state]);

  // If location is invalid, show 404 page
  if (!isValid) {
    notFound(); 
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">{`List of Restaurants in ${city.toUpperCase()}, ${state.toUpperCase()}`}</h1>
      {loading ? (
        // Show loading message while data is being fetched
        <p className='text-gray-500'>Loading...</p>
      ) : filteredRes.length > 0 ? (  
        // Display list of restaurants if data is found
        <ul className="max-w-4xl mx-auto">
          {filteredRes.map(restaurant => (
            <li key={restaurant.id} className="border-b border-gray-300 py-4">
              <h2 className="text-xl font-semibold">{restaurant.name}</h2>
              <p className="text-gray-500">{restaurant.diet.join(', ')}</p>
              <p className="text-gray-500">{restaurant.address}</p>
              <p className="text-gray-500">Phone: {restaurant.phone}</p>
              <p className="text-gray-500">Website: <a href={restaurant.website} className="text-blue-500" target="_blank" rel="noopener noreferrer">{restaurant.website}</a></p>
              <p className="text-gray-500">Opening Hours: {restaurant.openingHours}</p>
              <p className="text-gray-500">Rating: {restaurant.rating}</p>
            </li>
          ))}
        </ul>
      ) : (
        // Show message if no restaurants are found
        <p className='text-gray-500'>No data Found</p>
      )}
      {/* Link to go back to search page */}
      <Link href="/" className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600">
            Go Back Search
      </Link>
    </div>
  )
}

export default resultpage