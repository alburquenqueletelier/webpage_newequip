import React, { useState } from "react";
import { Link } from "react-router-dom"
// import { Context } from "../store/appContext";
import "../styles/navbar.css";

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

	const handleSearch = (e) => {
		e.preventDefault();
		console.log('pase por brujula');
	}

	return (
		// Classic Nav sticky to the top 
		<nav className="navbar navbar-expand-md navbar-light bg-secondary sticky-top">
			<div className="container">
				<Link to="/">
					<img src="http://newequip.cl/wp-content/uploads/2017/08/logo2.png" className="img-fluid" style={{ maxWidth: "12rem", width: "auto" }} alt="logo" />
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation" data-bs-target="#navbarSupportedContent">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav align-items-center">
						<li className="nav-item ">
							<form onSubmit={handleSearch}>
								<input type="text" placeholder="Busca por nombre o SKU" className="form-control" style={{width: "32rem"}}/>

							</form>
						</li>
						<span className="material-symbols-outlined" onClick={handleSearch}>
							search
						</span>

					</ul>
					<Link className="btn btn-primary ms-auto" to="/authentication">Login/Registro</Link>
					{/* <form className="d-md-flex ms-auto" onSubmit={handlelogin}>
						<input  className="form-control me-2 align-self-center" type="text" placeholder="Usuario" aria-label="Text" value={username} onChange={(e) => setUsername(e.target.value)} />
						<input  className="form-control me-2 align-self-center" type="password" placeholder="Constraseña" aria-label="Contraseña" onChange={(e) => setPassword(e.target.value)} />
						<div className="d-flex justify-content-center mt-1 mt-md-0">
						<button className="btn btn-outline-light" type="submit">Login</button>
						<a className="btn btn-outline-light ms-1" href="#register">Register</a>

						</div>
					</form> */}
				</div>
			</div>
		</nav>
	);
};