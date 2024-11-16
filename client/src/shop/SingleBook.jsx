import React from 'react'
import { useLoaderData } from 'react-router-dom';

// const SingleBook = () => {
//     const {id} = useLoaderData();
//   return (
//     <div>SingleBook:{id}</div>
//   )
// }

// export default SingleBook
const SingleBook = () => {
    const book = useLoaderData();  // Access the book data from the loader

    return (
        <div>
            <h1>{book.title}</h1>
            <p>Author: {book.author}</p>
            <img src={book.imageUrl} alt={book.title} />
            <p>{book.description}</p>
        </div>
    );
};

export default SingleBook;