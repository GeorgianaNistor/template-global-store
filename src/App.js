import React from "react";
import "./style.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";

import Products from "./pages/Products";
import Product from "./pages/Product";
import { APIProductsContextProvider } from "./store/Cart/productsContext";
import Header from "./components/Header";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<Header />
				<Home />
			</>
		),
	},
	{
		path: "/products",
		element: (
			<>
				<Header />
				<Products />
			</>
		),
	},
	{
		path: "/product/:id",
		element: (
			<>
				<Header />
				<Product />
			</>
		),
	},
]);

export default function App() {
	return (
		<APIProductsContextProvider>
			<div className="App primary">
				<RouterProvider router={router} />
			</div>
		</APIProductsContextProvider>
	);
}
