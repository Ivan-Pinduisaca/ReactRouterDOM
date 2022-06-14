import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Articulos } from '../components/Articulos';
import { Contacto } from '../components/Contacto';
import { Error } from '../components/Error';
import { Inicio } from '../components/Inicio';

export const RouterPrincipal = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/inicio' element={<Inicio />} />
                <Route path='/articulos' element={<Articulos />} />
                <Route path='/contacto' element={<Contacto />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}
