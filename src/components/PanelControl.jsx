import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const PanelControl = () => {
    return (
        <div>
            <h1>PANEL DE CONTROL</h1>
            <p>Elije una de estas opciones</p>

            <nav>
                <ul>
                    <li>
                        <NavLink to="/panel/inicio">Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/panel/crear-articulos">Crear articulos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/panel/gestion-usuarios">Gestion usuarios</NavLink>
                    </li>
                    <li>
                        <NavLink to="/panel/acerca-de">Acerca de</NavLink>
                    </li>
                </ul>
            </nav>

            <div>
                {/* Aquise va a cargar los componentes de las SubRutas */}
                <Outlet />
            </div>
        </div>
    )
}
