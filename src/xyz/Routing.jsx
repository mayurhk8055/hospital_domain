import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'

const Routing = () => {
    return (
        <div>
            <Router>
                <ul>
                    <li>  <Link to="/">Home</Link></li>

                    <li>  <Link to="/About">About</Link> </li>
                    <li> <Link to="/Contact">Contact</Link></li>

                </ul>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/About" element={<About />} />
                    <Route exact path="/Contact" element={<Contact />} />

                </Routes>


            </Router>

        </div>
    )
}

export default Routing
