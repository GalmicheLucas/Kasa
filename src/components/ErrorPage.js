import React from 'react'
import { NavLink } from "react-router-dom";
import "../sass/components/errorPages.scss"


function ErrorPage() {
  return (
    <div className="errorPage">
    <h1>404</h1>
    <p>Oups! La page que vous demandez n'existe pas.</p>
    <ul>
      <NavLink to="/">
        <li>Retourner sur la page d’accueil</li>
      </NavLink>
    </ul>
  </div>
  )
}

export default ErrorPage
