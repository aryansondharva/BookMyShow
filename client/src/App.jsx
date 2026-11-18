import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, uselocation } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import MyBookings from './pages/MyBooking'
import SeatLayout from './pages/SeatLayout'
import Favorite from './pages/Favorite'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'

const App = () => {

  const isAdminRoutes = uselocation().pathname.startsWith('/admin');

  return (
    <>
      <Toaster />
      { !isAdminRoutes && <Navbar/> }
      <Routes>
        <Routes path="/" element={<Home />} />
        <Routes path="/movies" element={<Movies />} />
        <Routes path="/favorite" element={<Favorite />} />
        <Routes path="/movies/:id" element={<MoviesDetails />} /> // Dynamic route for movie details
        <Routes path="/my-bookings" element={<MyBookings />} />
        <Routes path="/movies/:id/:date" element={<SeatLayout />} />
      </Routes>
      { !isAdminRoutes && <Footer /> }
    </>
  )
}

export default App

