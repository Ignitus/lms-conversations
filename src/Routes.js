import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Route Helpers
import PrivateRoute from "./helpers/routes/UserRoute";
import AdminRoute from "./helpers/routes/AdminRoute";
// Pages
import Home from "./pages/common/Home";
// import SignUp from "./pages/common/SignUp";
// import SignIn from "./pages/common/SignIn";

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				{/* <Route path="/signin" exact component={SignIn} />
				<Route path="/signup" exact component={SignUp} />
				<UserRoute path="/userdashboard" exact component={UserDash} />
				<AdminRoute path="/admindashboard" exact component={AdminDash} /> */}
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
