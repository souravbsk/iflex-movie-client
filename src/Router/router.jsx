import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/login";
import MovieDetails from "../Pages/MovieDetails/MovieDetails";
import Favorite from "../Pages/Favorite/Favorite";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/favorites",
                element:<Favorite></Favorite>
            },
            {
                path:"/view-details/:id",
                element:<MovieDetails></MovieDetails>,
                loader:({params}) => fetch(`https://iflex-movie-server.vercel.app/api/movies/${params.id}`) 
            }
        ]
    }
])


export default router;