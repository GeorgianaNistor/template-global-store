import React from "react";
import "./style.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";

import Products from "./pages/Products";
import Product from "./pages/Product";

import { Header } from "./components/Header";
import { useReducer } from "react";
import { initialState, cartReducer } from "./store/Cart/reducer";
import { CartContext } from "./store/Cart/context";
import MainContainer from "./components/MainContainer";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<MainContainer>
				<Home />
			</MainContainer>
		),
	},
	{
		path: "/products",
		element: (
			<MainContainer>
				<Products />
			</MainContainer>
		),
	},
	{
		path: "/product/:id",
		element: (
			<MainContainer>
				<Product />
			</MainContainer>
		),
	},
]);

export default function App() {
	const [state, dispatch] = useReducer(cartReducer, initialState);

	const cartContextValue = {
		state,
		dispatch,
	};

	return (
		<CartContext.Provider value={cartContextValue}>
			<div className="App primary">
				<RouterProvider router={router} />
			</div>
		</CartContext.Provider>
	);
}
