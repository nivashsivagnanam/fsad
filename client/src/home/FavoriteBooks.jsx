import React,{useEffect, useState} from 'react'
import BookCards from '../components/BookCards';
  
 export const FavoriteBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data))
    }, [])
    return (
        <BookCards books={books} headline="best seller"/>
    )
}
export default FavoriteBooks