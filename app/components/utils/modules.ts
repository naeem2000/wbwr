// image node
interface ShopifyImageNode {
	node: {
		url: string;
		altText: string | null;
	};
}

// single item node
interface ShopifyVariantNode {
	node: {
		id: string;
		price: {
			amount: string;
			currencyCode: string;
		};
	};
}

// whole product object
export default interface ShopifyProduct {
	id: string;
	title: string;
	handle: string;
	description: string;
	images: {
		edges: ShopifyImageNode[];
	};
	variants: {
		edges: ShopifyVariantNode[];
	};
}

// gql response type with pagination
export interface ShopifyProductResponse {
	products: {
		pageInfo: {
			hasNextPage: boolean;
		};
		edges: {
			cursor: string;
			node: ShopifyProduct;
		}[];
	};
}

export interface Colors {
	[key: string]: string;
}
