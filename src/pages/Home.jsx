import React from "react";
import { Link } from "react-router-dom";
import { useProductsProvider } from "../store/Cart/productsContext";

export function Home() {
	const { products } = useProductsProvider();
	console.log(products);
	return (
		<div>
			<div className="d-flex flex-column align-items-center">
				{products.map((product) => {
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
