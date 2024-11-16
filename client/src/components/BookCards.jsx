// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';



// // import required modules
// import { Pagination } from 'swiper/modules';
// import { Link } from 'react-router-dom';



//   const BookCards = ({headline,books}) => {
//     console.log(books) ;

//   return (
//     <div><h2 >{headline}</h2>
//     <div>
//     <Swiper
//         slidesPerView={1}
//         spaceBetween={10}
//         pagination={{
//           clickable: true,
//         }}
//         breakpoints={{
//           640: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           768: {
//             slidesPerView: 4,
//             spaceBetween: 40,
//           },
//           1024: {
//             slidesPerView: 5,
//             spaceBetween: 50,
//           },
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
      
//         {books.map((book) => <SwiperSlide key={ book._id }><link to="/">
//         <div><img src={book.imageUrl}alt="" /></div> 
//     <div><h3>{book.title}</h3></div>
//         </link>
//         </SwiperSlide>)}
        
//       </Swiper>
//     </div>
//     </div>
    
//   )
// }

// export default BookCards
import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';

const BookCards = ({ headline, books }) => {
    console.log(books);

    return (
        <div>
            <h2>{headline}</h2>
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {books.map((book) => (
                        <SwiperSlide key={book._id}>
                            <Link to={`/book/${book._id}`}>
                                <div>
                                    <img src={book.imageUrl} alt={book.title} />
                                </div>
                                <div>
                                    <h3>{book.title}</h3>
                                    <p>{book.author}</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default BookCards;
