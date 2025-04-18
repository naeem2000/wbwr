interface ShopifyImageNode {
	node: {
		url: string;
	};
}

export interface ShopifyProduct {
	id: string;
	title: string;
	description: string;
	images: {
		edges: ShopifyImageNode[];
	};
}

export interface ShopifyProductResponse {
	products: {
		edges: {
			node: ShopifyProduct;
		}[];
	};
}
