
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'
import BookMarks from './pages/BookMarks.jsx'
import MainLayouts from './layouts/MainLayouts.jsx'

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
        element:<Blogs></Blogs>
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
