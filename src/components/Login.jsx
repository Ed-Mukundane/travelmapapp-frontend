/** @format */

import { Cancel, Room } from "@material-ui/icons";
import axios from "axios";
import { useRef, useState } from "react";
import "./Login.css";

export default function Login({ setShowLogin, myStorage, setCurrentUser }) {
	const [error, setError] = useState(false);
	const usernameRef = useRef();
	const passwordRef = useRef();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const user = {
			username: usernameRef.current.value,
			password: passwordRef.current.value,
		};

		try {
			const res = await axios.post("/users/login", user);
            myStorage.setItem("user", res.data.username)
            setCurrentUser(res.data.username)
            setShowLogin(false)
			setError(false);
		} catch (err) {
			setError(true);
		}
	};
	return (
		<div className="loginContainer">
			<div className="logo">
				<Room className="logoIcon" />
				<span>Travel Map App</span>
			</div>
			<form onSubmit={handleSubmit}>
				<input autoFocus placeholder="username" ref={usernameRef} />
				<input
					type="password"
					min="6"
					placeholder="password"
					ref={passwordRef}
				/>
				<button className="loginButton" type="submit">
					Login
				</button>
				
				{error && (
					<span className="failure">
						Wrong username or password!
					</span>
				)}
			</form>
			<Cancel
				className="loginCancel"
				onClick={() => setShowLogin(false)}
			/>
		</div>
	);
}
