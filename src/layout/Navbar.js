import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="m-2">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
                <div className="container-fluid my-1">
                    <Link className="navbar-brand display-6 mx-2" to={"/"}>Автосервис "Всегда на колесах"</Link>
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
                        <Link className="btn btn-lg btn-outline-secondary mx-2" to="/archive">Архив</Link>
                        <Link className="btn btn-lg btn-success" to="/add-request">Добавить новую заявку</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
