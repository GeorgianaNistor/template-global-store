import React, { useContext, useEffect } from "react";
import Header from "./Header";
import { CartContext } from "../store/Cart/context";
import { addToCart } from "../store/Cart/actions";

export default function MainContainer(props) {
	const { dispatch } = useContext(CartContext);
	// In aceasta componenta principala setam pe global store produsele
	useEffect(() => {
		fetch("https://www.cheapshark.com/api/1.0/deals?pageSize=4")
			.then((response) => response.json())
			.then((products) => {
				const actionResult = addToCart(products);
				dispatch(actionResult);
			});
	}, []);
	
	return (
		<div>
			<Header />
			<main>{props.children}</main>
		</div>
	);
}
