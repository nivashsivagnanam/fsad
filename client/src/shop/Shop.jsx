import React, { useState } from 'react';
import axios from 'axios';

const SearchBooks = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);

  // Handle the search input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle the search form submission
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5000/search-books?text=${searchTerm}`);
      setBooks(response.data);  // Update state with search results
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Search Books</h1>

      {/* Search Form */}
      <form onSubmit={handleSearchSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by Title or Author"
          value={searchTerm}
          onChange={handleSearch}
          style={{
            padding: '8px',
            width: '100%',
            maxWidth: '400px',
            margin: '0 auto',
            display: 'block',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '8px 16px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#4CAF50',
            color: 'white',
            cursor: 'pointer',
            marginTop: '10px',
          }}
        >
          Search
        </button>
      </form>

      {/* Display Search Results */}
      <div>
        {books.length > 0 ? (
          <ul style={{ listStyleType: 'none', padding: '0' }}>
            {books.map((book) => (
              <li key={book._id} style={{ marginBottom: '10px' }}>
                <strong>{book.title}</strong> by {book.author}
                <br />
                <img src={book.imageUrl} alt={book.title} style={{ maxWidth: '100px' }} />
              </li>
            ))}
          </ul>
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchBooks;
