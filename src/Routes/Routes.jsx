import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/Auth/SignUp";
import SignIn from "../Pages/Auth/SignIn";
import Dashboard from "../Layout/Dashboard";
import Profile from "../Pages/Dashboard/User/Profile/Profile";
import BookParcel from "../Pages/Dashboard/User/BookParcel/BookParcel";
import MyParcels from "../Pages/Dashboard/User/MyParcels/MyParcels";
import UpdateParcel from "../Pages/Dashboard/User/UpdateParcel/UpdateParcel";
import AdminStats from "../Pages/Dashboard/Admin/AdminStats/AdminStats";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers/AllUsers";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: '/signUp',
        element: <SignUp></SignUp>
    },
    {
        path: '/signIn',
        element: <SignIn></SignIn>
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            // role admin
            {
                index: true,
                element: <AdminStats></AdminStats>
            },
            {
                path: 'all-users',
                element: <AllUsers></AllUsers>
            },

            // role  User
            {
                path: 'my-profile',
                element: <Profile></Profile>
            },
            {
                path: 'book-parcel',
                element: <BookParcel></BookParcel>
            },
            {
                path: 'update-parcel/:id',
                element: <UpdateParcel></UpdateParcel>,
                loader: ({ params }) => fetch(`http://localhost:5000/parcels/update/${params.id}`)
            },
            {
                path: 'my-parcels',
                element: <MyParcels></MyParcels>
            }
        ]
    }
])