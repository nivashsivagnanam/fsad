import React from 'react'
 import FavoriteBooks from './FavoriteBooks'

 export const Home = () => {
  return (
    
    <FavoriteBooks/>
  ) }
 export default Home

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import FavoriteBooks from './FavoriteBooks';

// const Home = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // Fetch books based on search term
//   const handleSearch = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(`/search-books?q=${searchTerm}`);
//       setBooks(response.data);
//     } catch (error) {
//       console.error("Error fetching search results", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Book Search</h1>
      
//       {/* Search bar */}
//       <input 
//         type="text" 
//         placeholder="Search for books..." 
//         value={searchTerm} 
//         onChange={(e) => setSearchTerm(e.target.value)} 
//       />
//       <button onClick={handleSearch}>Search</button>
      
//       {/* Loading indicator */}
//       {loading && <p>Loading...</p>}

//       {/* Display books */}
//       <div>
//         {books.length > 0 ? (
//           books.map(book => (
//             <div key={book._id}>
//               <h3>{book.title}</h3>
//               <p>Author: {book.author}</p>
//             </div>
//           ))
//         ) : (
//           !loading && <p>No books found.</p>
//         )}
//       </div>

//       {/* Favorite Books */}
//       <FavoriteBooks />
//     </div>
//   );
// };

// export default Home;

