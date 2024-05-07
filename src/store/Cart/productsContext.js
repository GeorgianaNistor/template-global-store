import React, { useContext, useState, useEffect, createContext } from "react";

const APIContextProducts = createContext();

export function APIProductsContextProvider({ children }) {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch("https://www.cheapshark.com/api/1.0/deals?pageSize=4")
			.then((response) => response.json())
			.then((data) => {
				setProducts(data);
			});
	}, []);
	return (
		<APIContextProducts.Provider
			value={{
				products,
			}}
		>
			{children}
		</APIContextProducts.Provider>
	);
}

export function useProductsProvider() {
	const context = useContext(APIContextProducts);
	if (context === undefined) {
		throw new Error("Context must be used within a Provider");
	}
	return context;
}
