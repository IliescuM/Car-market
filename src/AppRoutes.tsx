import { Routes, Route } from "react-router-dom"
import { Layout } from "./components/layout/Layout"
import { UserProfile } from "./pages/UserProfile/UserProfile"
import { Car } from "./pages/Car/Car"
import { Cars } from "./pages/Cars/Cars"
import { Home } from "./pages/Home/Home"

export const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path='/home' element={<Home />} />
                <Route path='/profile' element={<UserProfile />} />
                <Route path='/cars' element={<Cars />} />
                <Route path='/cars/:uuid' element={<Car />} />
                <Route path='/users' element={<UserProfile />} />
                <Route path='/users/:User_uuid' element={<UserProfile />} />
            </Route>
        </Routes>
    )
}