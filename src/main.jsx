import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client'

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Web from "./pages/Web";
import Tutor from "./pages/Tutor";
import Bot from "./pages/Bot";
import Server from './pages/Server';
import NotFound from "./pages/NotFound";

import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/web" element={<Web />} />
        <Route path="/tutor" element={<Tutor />} />
        <Route path="/bot" element={<Bot />} />
        <Route path="/server" element={<Server />} />
        <Route path="*" element={<NotFound />} fallback={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
