import React from "react";
import {
	HomeLayout,
	Landing,
	Error,
	Products,
	SingleProduct,
	Cart,
	About,
	Register,
	Login,
	Checkout,
	Orders,
} from "./pages";

import { ErrorElement } from "./components";

// loader
import { loader as landingLoader } from "./pages/Landing";
import { loader as SingleProductLoader } from "./pages/SingleProduct";
// actions

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
				errorElement: <ErrorElement />,
				loader: landingLoader,
			},
			{
				path: "products",
				element: <Products />,
			},
			{
				path: "products/:id",
				element: <SingleProduct />,
				errorElement: <ErrorElement />,
				loader: SingleProductLoader,
			},
			{
				path: "cart",
				element: <Cart />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "checkout",
				element: <Checkout />,
			},
			{
				path: "orders",
				element: <Orders />,
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
		errorElement: <Error />,
	},
	{
		path: "/register",
		element: <Register />,
		errorElement: <Error />,
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
