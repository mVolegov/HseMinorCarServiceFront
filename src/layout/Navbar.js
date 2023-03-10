import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="m-2">
      <nav className="navbar sticky-bottom navbar-expand-lg navbar-dark bg-dark rounded-3 m-1 sticky-top">
        <div className="container-fluid my-1">
          <Link className="navbar-brand mx-2" to={"/"}>Автосервис "Всегда на колесах"</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div>
            <Link className="btn btn-outline-primary" to={"/"}>Текущие заявки</Link>
            <Link className="btn btn-outline-secondary mx-3" to="/archive">Архив</Link>
            <Link className="btn btn-outline-info" to={`/handbook`}>Справочная ифнормация</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
