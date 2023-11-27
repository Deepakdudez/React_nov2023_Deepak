import React from "react";
import Login from "./components/Login";
import RegistrationForm from "./components/Register";
import { userContext } from "./components/Context";
import { useContext } from "react";
import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import route from "./components/Router";

		function App() {
			const [user, setuser] = useState("");
	          return ( 	
				<userContext.Provider value = {[user, setuser]}>
				<RouterProvider router={route}>
				</RouterProvider>
				</userContext.Provider>
			  	 );
	}

	export default App;

 /*import React from "react";
import Navbar from "./components/Navbar";

		function App() {
	          return (
    		<div className="App">
        		
            <Navbar></Navbar>
    		</div>
 		 );
	}

	export default App;*/
