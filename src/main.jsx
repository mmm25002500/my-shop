import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./NotFound";
import App from './App'
import './index.css'

import ToDoList from "./TodoList";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <App /> } />
        <Route path="/todolist" element={<ToDoList />} />
        <Route path="*" element={<NotFound />} fallback={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)