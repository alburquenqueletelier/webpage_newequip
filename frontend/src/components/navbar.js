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
				<Link to="/" className="me-3">
					<img src="http://newequip.cl/wp-content/uploads/2017/08/logo2.png" className="img-fluid" style={{ maxWidth: "9rem", width: "auto" }} alt="logo" />
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation" data-bs-target="#navbarSupportedContent">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav align-items-center">
						<li className="nav-item ">
							<form onSubmit={handleSearch}>
								<input type="text" placeholder="Busca por nombre o SKU" className="form-control" style={{width: "30vw"}} />

							</form>
						</li>
						<li className="material-symbols-outlined" style={{fontSize: "2.4rem"}} onClick={handleSearch}>
							search
						</li>

					</ul>
					<Link className="btn btn-primary ms-auto" to="/authentication">Login/Registro</Link>
					<Link className="m-auto text-dark border border-1 p-1" style={{textDecoration: "none"}}>
						<img src="https://cdn-icons-png.flaticon.com/512/4175/4175270.png" alt="carrito" width="36rem" />
						<span className="badge text-bg-dark m-0 p-1 "
						style={{
							position: "relative",
							bottom: "0.8rem",
							right: "0.3rem",
						}}
						>
							10
						</span>
						<span>$3.000</span>
					</Link>
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