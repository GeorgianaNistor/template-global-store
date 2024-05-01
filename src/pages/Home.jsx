import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../store/Cart/context";

export function Home() {
	const { state } = useContext(CartContext);
	console.log(state);
	return (
		<div>
			<div className="d-flex flex-column align-items-center">
				{state.products.map((product) => {
					return (
						<div style={{ border: '1px solid black',  padding: 10, margin: 10 }}>
							Nume Produs:
							<Link to={`/product/${product.gameID}`}>
								 {product.title}
							</Link>
						</div>
					);
				})}
			</div>
			<Link to="/products">Vezi toate produsele</Link>
		</div>
	);
}
