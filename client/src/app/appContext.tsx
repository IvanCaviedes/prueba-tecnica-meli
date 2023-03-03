import { createContext, useState } from 'react'
import {
	type AppProviderProps,
	type AppValuesType,
	type DetailItemType,
	type ErrCallbackType,
	type handleDetalleTypes,
	type handleSearchTypes,
	type SearchResultType,
} from './types'

import axios from 'axios'

import appConfig from 'config/app'

const defaultProvider: AppValuesType = {
	loading: false,
	productList: null,
	itemDetalle: null,
	SearchProduct: async () => {
		await Promise.resolve()
	},
	GetItemDetalle: async () => {
		await Promise.resolve()
	},
	clearProductList: () => null,
}

export const AppContext = createContext<AppValuesType>(defaultProvider)

export const AppProvider: React.FC<AppProviderProps> = ({
	children,
}: AppProviderProps) => {
	const [loading, setLoading] = useState<boolean>(defaultProvider.loading)
	const [productList, setProductList] = useState<SearchResultType | null>(
		defaultProvider.productList
	)
	const [itemDetalle, setItemDetalle] = useState<DetailItemType | null>(
		defaultProvider.itemDetalle
	)

	const handleSearch = (
		{ search }: handleSearchTypes,
		errorCallback?: ErrCallbackType
	) => {
		setLoading(true)
		axios
			.get<SearchResultType>(appConfig.searchEndPoint + search)
			.then((response) => {
				setProductList({ ...response.data })
				setLoading(false)
			})
			.catch((err) => {
				setLoading(false)
				if (errorCallback != null) {
					errorCallback(err)
				}
			})
	}

	const handleItemDetail = (
		{ id }: handleDetalleTypes,
		errorCallback?: ErrCallbackType
	) => {
		setLoading(true)
		axios
			.get<DetailItemType>(appConfig.deteailItemEnpoint + id)
			.then((response) => {
				setLoading(false)
				setItemDetalle({ ...response.data })
			})
			.catch((err) => {
				setLoading(false)
				if (errorCallback != null) {
					errorCallback(err)
				}
			})
	}

	const handleCleanProductList = () => {
		setProductList(null)
	}

	const values: AppValuesType = {
		loading,
		SearchProduct: handleSearch,
		productList,
		itemDetalle,
		GetItemDetalle: handleItemDetail,
		clearProductList: handleCleanProductList,
	}

	return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}
export const AppConsumer = AppContext.Consumer
