// image edge only node
export interface ShopifyImageEdge {
	edges: {
		node: {
			url: string;
			altText: string | null;
		};
	}[];
}

// single item node
interface ShopifyVariantNode {
	edges: {
		node: {
			id: string;
			title: string;
			price: {
				amount: string;
				currencyCode: string;
			};
			image?: {
				url: string;
			};
			selectedOptions: {
				name: string;
				value: string;
			}[];
		};
	}[];
}

// whole product object
export interface ShopifyProduct {
	id: string;
	title: string;
	description: string;
	images: ShopifyImageEdge;
	variants: ShopifyVariantNode;
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
