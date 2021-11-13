/** @format */

// import "./Register.css";
// import { Room, Cancel } from "@material-ui/icons";
// import { useRef, useState } from "react";
// import axios from "axios";

// const Register = (setShowRegister) => {
// 	const [success, setsuccess] = useState(false);
// 	const [error, setError] = useState(false);

// 	const nameRef = useRef();
// 	const emailRef = useRef();
// 	const passwordRef = useRef();

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		const newUser = {
// 			username: nameRef.current.value,
// 			email: emailRef.current.value,
// 			password: passwordRef.current.value,
// 		};

// 		try {
// 			await axios.post("/users/register", newUser);
// 			setError(false);
// 			setsuccess(true);
// 		} catch (err) {
// 			setError(true);
// 		}
// 	};

// 	return (
// 		<div className="registerContainer">
// 			<div className="logo">
// 				<Room />
// 				Travel Map App
// 			</div>
// 			<form onSubmit={handleSubmit}>
// 				<input type="text" placeholder="Username" ref={nameRef} />
// 				<input type="email" placeholder="Email" ref={emailRef} />
// 				<input type="password" placeholder="Password" ref={passwordRef} />
// 				<button className="registerButton">Register</button>
// 				{success && (
// 					<span className="success">Successful. You can login now!</span>
// 				)}
// 				{error && (
// 					<span className="failure">
// 						Error. Something went wrong! Please try again.
// 					</span>
// 				)}
// 			</form>
// 			<Cancel
// 				className="registerCancel"
// 				onClick={() => setShowRegister(false)}
// 			/>
// 		</div>
// 	);
// };

// export default Register;

import { Cancel, Room } from "@material-ui/icons";
import axios from "axios";
import { useRef, useState } from "react";
import "./Register.css";

export default function Register({ setShowRegister }) {
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const usernameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newUser = {
			username: usernameRef.current.value,
			email: emailRef.current.value,
			password: passwordRef.current.value,
		};

		try {
			await axios.post("/users/register", newUser);
			setError(false);
			setSuccess(true);
		} catch (err) {
			setError(true);
		}
	};
	return (
		<div className="registerContainer">
			<div className="logoRegister">
				<Room className="logoIcon" />
				<span>Travel Map App</span>
			</div>
			<form onSubmit={handleSubmit}>
				<input autoFocus placeholder="username" ref={usernameRef} />
				<input type="email" placeholder="email" ref={emailRef} />
				<input
					type="password"
					min="6"
					placeholder="password"
					ref={passwordRef}
				/>
				<button className="registerButton" type="submit">
					Register
				</button>
				{success && (
					<span className="success">
						Registered Successfully. You can login now!
					</span>
				)}
				{error && (
					<span className="failure">
						Error. Something went wrong! Please try again.
					</span>
				)}
			</form>
			<Cancel
				className="registerCancel"
				onClick={() => setShowRegister(false)}
			/>
		</div>
	);
}
