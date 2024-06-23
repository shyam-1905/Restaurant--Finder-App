'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { normalizeString} from '@/app/utils/utils';

export default function SearchPage() {
  // State for selected city and state
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  // State for lists of available cities and states
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Fetch data from the dummy database
    const fetchData = async () => {
      // Import restaurant data
      const result = await import('/data/restaurants.json');
      const citySet = new Set();
      const stateSet = new Set();
      // Populate sets with unique cities and states
      result.default.forEach(restaurant => {
        citySet.add(restaurant.city);
        stateSet.add(restaurant.state);
      });
      // Update state with arrays of unique cities and states
      setCities([...citySet]);
      setStates([...stateSet]);
    };
    fetchData();
  }, []);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (city && state) {
      console.log(`Selected City: ${city}, Selected State: ${state}`);
      // Navigate to results page with formatted URL
      router.push(`/${normalizeString(city)}/${normalizeString(state)}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>{`Restaurants | Your Website Name`}</title>
      </Head>
      <h1 className="text-3xl font-bold mb-6">Search for Restaurants</h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-80">
        {/* Dropdown for selecting city */}
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-3 mb-4 border border-gray-300 rounded"
          required
        >
          <option value="" disabled>Select City</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>{city}</option>
          ))}
        </select>
        {/* Dropdown for selecting state */}
        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="p-3 mb-4 border border-gray-300 rounded"
          required
        >
          <option value="" disabled>Select State</option>
          {states.map((state, index) => (
            <option key={index} value={state}>{state}</option>
          ))}
        </select>
        {/* Submit button */}
        <button type="submit" className="p-3 bg-blue-500 text-white rounded hover:bg-blue-700">
          Search
        </button>
      </form>
    </div>
  );
}