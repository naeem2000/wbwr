interface ShopifyImageNode {
	node: {
		url: string;
	};
}

export type RootStackParamList = {
	Index: undefined;
	Home: undefined;
};

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
