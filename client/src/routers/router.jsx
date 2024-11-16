import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";

import Banner from "../components/Banner";
import SingleBook from "../shop/SingleBook";
import Login from "../components/Login";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
            path: "/shop",
            element: <Shop/>,
        },
        {
          path: "/about",
          element: <About/>,
        },
        
          {path:"/banner",
            element:<Banner/>,}
            ,
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/book/:id",
                element: <SingleBook />,
                loader: async ({ params }) => {
                    const response = await fetch(`http://localhost:5000/book/${params.id}`);
                    if (!response.ok) {
                        throw new Error("Failed to load book data");
                    }
                    return response.json();
                } 
                
            },
            

      ],
    },
  ]);
  export default router;