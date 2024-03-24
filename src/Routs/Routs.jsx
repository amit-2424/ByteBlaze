import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Blog from "../pages/Blog";
import BookMarks from "../pages/BookMarks";
import Content from "../components/Content";
import Author from "../components/Author";


 export const router = createBrowserRouter([
    {
      path:"/",
      element: <MainLayouts></MainLayouts>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/blogs",
          loader: ()=> fetch("https://dev.to/api/articles?per_page=21&top=7"),
          element:<Blogs></Blogs>
        },
        {
          path:"/blog/:id",
          loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
          element:<Blog></Blog>,
          children:[
            {
                index: true,
                loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
                element: <Content></Content>
            },
            {
                path: "author",
                loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
                element: <Author></Author>
            }
          ]
        },
        {
          path:"/bookmarks",
          element:<BookMarks></BookMarks>
        }
      ]
    }
  ])
