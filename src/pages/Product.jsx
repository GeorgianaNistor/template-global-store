import React from "react";
import { Link, useParams } from "react-router-dom";
import { useProductsProvider } from "../store/Cart/productsContext";

export default function Product() {
	const { products } = useProductsProvider();
	let { id } = useParams();
	const foundProduct = products.find((product) => product.gameID === id);

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
