import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/homePage";
import ErrorPage from "../pages/errorPage";
import NewPage from "../pages/newPage";
import OddPage from "../pages/oddPage";
import Series from "../pages/seriesPage";


const routerApp = createBrowserRouter([
    { path: '', element: <HomePage />, errorElement: <ErrorPage />},
    { path: '/new', element: <NewPage />, errorElement: <ErrorPage />},
    { path: '/phim-le', element: <OddPage />, errorElement: <ErrorPage />},
    { path: '/phim-bo', element: <Series />, errorElement: <ErrorPage />}
])

export default routerApp;