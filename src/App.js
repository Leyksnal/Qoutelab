import React from 'react'
import QouteHeader from './components/QouteHeader/QouteHeader'
import QoutePhase from './components/QoutePhase/QoutePhase';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import QoutePost from './components/QoutePost/QoutePost';
import { QouteState } from './components/QouteState/QouteState';

export default function App() {
  return (
    <QouteState>
      <BrowserRouter>
        <QouteHeader/>
          <Routes>
            <Route path='/' element={<QoutePhase/>}/>
            <Route path='/post' element={<QoutePost/>}/>
          </Routes>
      </BrowserRouter>
    </QouteState>
  )
}