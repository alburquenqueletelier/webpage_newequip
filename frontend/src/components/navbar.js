import React, { useState } from "react";
import { Link } from "react-router-dom"
// import { Context } from "../store/appContext";

export const Navbar = () => {

	// const { store, actions } = useContext(Context);

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handlelogin = (e) => {
		e.preventDefault();
		console.log('username: ', username, 'password: ', password);
		// Add function from flux to hit the api that authenticate the user
		return false;
	};

	return (
		// Classic Nav sticky to the top 
		<nav className="navbar navbar-expand-md navbar-light bg-secondary sticky-top">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Home</span>
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation" data-bs-target="#navbarSupportedContent">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav align-items-center">
						<li className="nav-item ">
							<Link to="/products" className="nav-link">
								Menu
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/order" className="nav-link">
								Cart
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact" className="nav-link">Contact</Link>
						</li>
						<li className="nav-item">
							<Link to="/about-us" className="nav-link">About us</Link>
						</li>
					</ul>
					<form className="d-md-flex ms-auto" onSubmit={handlelogin}>
						<input  className="form-control me-2 align-self-center" type="text" placeholder="Usuario" aria-label="Text" value={username} onChange={(e) => setUsername(e.target.value)} />
						<input  className="form-control me-2 align-self-center" type="password" placeholder="Constraseña" aria-label="Contraseña" onChange={(e) => setPassword(e.target.value)} />
						<div className="d-flex justify-content-center mt-1 mt-md-0">
						<button className="btn btn-outline-light" type="submit">Login</button>
						<a className="btn btn-outline-light ms-1" href="#register">Register</a>

						</div>
					</form>
				</div>
			</div>
		</nav>
	);
};