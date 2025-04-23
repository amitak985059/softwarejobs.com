import './App.css'
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/login'
import CreateJob from './pages/CreateJob'
import PrivateRoute from './pages/PrivateRoute'  // Import the PrivateRoute component

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/createJob"
          element={
            <PrivateRoute>
              <CreateJob />
            </PrivateRoute>
          }
        />

      </Routes>

    </>
  )
}

export default App
