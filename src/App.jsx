import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AppLayout from "./Layout/AppLayout"
import Home from "./Components/Pages/Home"
import About from "./Components/Pages/About"
import Courses from "./Components/Pages/Courses"
import Admission from "./Components/Pages/Admission"
import Gallery from "./Components/Pages/Gallery"
import OnlineForm from "./Components/Function/OnlineForm"
import LibraryCard from "./Components/Function/LibraryCard"
import VisitCampus from "./Components/Pages/VisitCampus"
import Sedual from "./Components/Function/Sedual"
import History from "./Components/Pages/History"
import News from "./Components/Pages/News"
import Downloads from "./Components/Pages/Downloads"
import Contact from "./Components/Pages/Contact"


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/courses", 
        element: <Courses />
      },
      {
        path: "/admission",
        element: <Admission />
      },
      {
        path: "/gallery",
        element: <Gallery/>
      },
      {
        path: "/history",
        element: <History/>
      },
      {
        path: "/news",
        element: <News/>
      },
      {
        path: "/downloads",
        element: <Downloads/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/onlineform",
        element: <OnlineForm/>
      },
      {
        path: "/librarycard",
        element: <LibraryCard/>
      },
      {
        path: "/visitcampus",
        element: <VisitCampus/>
      },
      {
        path: "/sedual",
        element: <Sedual/>
      }



    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App