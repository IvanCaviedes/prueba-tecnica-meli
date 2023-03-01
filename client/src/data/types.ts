export interface ProductPrice {
    currency: String,
    amount: Number,
    decimals: Number
}

export interface ProductDataType {
    id: String,
    tittle: String,
    price: ProductPrice,
    picture: String,
    condition: String,
    free_shipping: Boolean
}