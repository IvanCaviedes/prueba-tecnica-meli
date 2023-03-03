export interface ProductPrice {
	currency: string
	amount: number
	decimals: number
}

export interface ProductDataType {
	id: string
	tittle: string
	price: ProductPrice
	picture: string
	condition: string
	free_shipping: boolean
	location: string
}
