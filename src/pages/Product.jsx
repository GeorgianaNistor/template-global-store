import React from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../store/Cart/context";

export default function Product() {
	const { state } = useContext(CartContext);
	let { id } = useParams();
	const foundProduct = state.products.find((product) => product.gameID === id);

	return (
		<div>
			<div className="d-flex flex-column align-items-center">
				{!foundProduct ? (
					<p>Nu s-a gasit produsul</p>
				) : (
					<div>
						<p>
							<strong>Produs gasit:</strong>
							<br />
							{foundProduct.title}
						</p>
						<img src={foundProduct.thumb} />
					</div>
				)}
			</div>
			<Link to="/products">Vezi toate produsele</Link>
		</div>
	);
}
