import React from 'react'
import QouteHeader from './components/QouteHeader/QouteHeader'
import styled from 'styled-components'
import QoutePhase from './components/QoutePhase/QoutePhase';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import QoutePost from './components/QoutePost/QoutePost';

export default function App() {
  return (
    <BrowserRouter>
      <QouteHeader/>
        <Routes>
          <Route path='/' element={<QoutePhase/>}/>
          <Route path='/post' element={<QoutePost/>}/>
        </Routes>
    </BrowserRouter>
  )
}