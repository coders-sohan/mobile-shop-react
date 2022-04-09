import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import About from "./pages/About/AboutPage";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Products from "./pages/Products/ProductsPage";
import Register from "./pages/Register/Register";

function App() {
	return (
		<>
			<AuthProvider>
				<Router>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/home">
							<Home />
						</Route>
						<Route path="/about">
							<About />
						</Route>
						<PrivateRoute path="/products">
							<Products />
						</PrivateRoute>
						<Route path="/contact">
							<Contact />
						</Route>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/register">
							<Register />
						</Route>
					</Switch>
				</Router>
			</AuthProvider>
		</>
	);
}

export default App;
