import React from "react";
import "./Footer.css";

function Footer() {
	return (
		<footer>
			<h4>&copy; {new Date().getFullYear()}</h4>
			<h4>Made by Andrew. Developed using React.js</h4>
		</footer>
	);
}

export default Footer;
