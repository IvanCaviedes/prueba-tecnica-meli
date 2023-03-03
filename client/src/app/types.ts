/* eslint-disable camelcase */
import { type ProductDataType } from 'data/types'
import { type ReactNode } from 'react'

export interface AuthorType {
	name: string
	lastname: string
}

export interface SearchResultType {
	author: AuthorType
	items: ProductDataType[]
	categories: string[]
}

export interface AppProviderProps {
	children: ReactNode
}

export interface handleSearchTypes {
	search: string
}
export interface handleDetalleTypes {
	id: string
}

export interface ProductDataDetailType extends ProductDataType {
	sold_quantity: number
	description: string
}

export interface DetailItemType {
	author: AuthorType
	item: ProductDataDetailType
}

export const itemEmptyDetalle: ProductDataDetailType = {
	condition: '',
	description: '',
	free_shipping: false,
	id: '',
	location: '',
	picture: '',
	price: {
		amount: 0,
		currency: 'USD',
		decimals: 0,
	},
	sold_quantity: 0,
	tittle: '',
}

export type ErrCallbackType = (err: Record<string, string>) => void

export interface AppValuesType {
	loading: boolean
	productList: SearchResultType | null
	SearchProduct: (
		params: handleSearchTypes,
		errorCallback?: ErrCallbackType
	) => void
	GetItemDetalle: (
		params: handleDetalleTypes,
		errorCallback?: ErrCallbackType
	) => void
	itemDetalle: DetailItemType | null
	clearProductList: () => void
}
