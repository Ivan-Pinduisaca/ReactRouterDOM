import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import { Articulos } from '../components/Articulos';
import { Contacto } from '../components/Contacto';
import { Error } from '../components/Error';
import { Inicio } from '../components/Inicio';
import { AcercaDe } from '../components/panel/AcercaDe';
import { Crear } from '../components/panel/Crear';
import { Gestion } from '../components/panel/Gestion';
import { InicioPanel } from '../components/panel/Inicio';
import { PanelControl } from '../components/PanelControl';
import { Persona } from '../components/Persona';

export const RouterPrincipal = () => {
    return (
        <BrowserRouter>

            <h1>Cabecera</h1>
            <hr />

            <nav>
                <ul>
                    <li>
                        <NavLink to='/inicio' className={({ isActive }) => isActive ? 'activado' : ''}>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to='/articulos' className={({ isActive }) => isActive ? 'activado' : ''}>Articulos</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contacto' className={({ isActive }) => isActive ? 'activado' : ''}>Contacto</NavLink>
                    </li>
                    <li>
                        <NavLink to='/panel' className={({ isActive }) => isActive ? 'activado' : ''}>Panel de Control</NavLink>
                    </li>
                </ul>
            </nav>

            <hr />

            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/inicio' element={<Inicio />} />
                <Route path='/articulos' element={<Articulos />} />
                <Route path='/contacto' element={<Contacto />} />
                <Route path='/persona/:nombre/:apellido' element={<Persona />} />
                <Route path='/persona/:nombre' element={<Persona />} />
                <Route path='/persona' element={<Persona />} />

                <Route path='/panel/*' element={<PanelControl />}>
                    <Route index element={<InicioPanel />} />
                    <Route path='inicio' element={<InicioPanel />} />
                    <Route path='crear-articulos' element={<Crear />} />
                    <Route path='gestion-usuarios' element={<Gestion />} />
                    <Route path='acerca-de' element={<AcercaDe />} />
                </Route>

                <Route path='/redirect' element={<Navigate to='/persona/Ivan/Pinduisaca' />} />
                <Route path='*' element={<Error />} />
            </Routes>

            <hr />

            <footer>
                Pie de página
            </footer>
        </BrowserRouter>
    )
}
