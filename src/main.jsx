
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'
import BookMarks from './pages/BookMarks.jsx'
import MainLayouts from './layouts/MainLayouts.jsx'
import Blog from './pages/Blog.jsx'

const router = createBrowserRouter([
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
        element:<Blog></Blog>
      },
      {
        path:"/bookmarks",
        element:<BookMarks></BookMarks>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
      <RouterProvider router={router}></RouterProvider>
  </>
)
