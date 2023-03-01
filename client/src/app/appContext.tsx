import { createContext, useState } from "react"
import { AppContextValue, AppProviderProps, AppValuesType, DetailItemType, ErrCallbackType, handleDetalleTypes, handleSearchTypes, SearchResultType } from "./types"

import axios from "axios"

import appConfig from "config/app";

const defaultProvider: AppValuesType = {
    loading: false,
    productList: null,
    itemDetalle: null,
    SearchProduct: () => Promise.resolve(),
    GetItemDetalle: () => Promise.resolve(),
}

export const AppContext = createContext<AppContextValue>(defaultProvider)

export const AppProvider = ({ children }: AppProviderProps) => {

    const [loading, setLoading] = useState<boolean>(defaultProvider.loading)
    const [productList, setProductList] = useState<SearchResultType | null>(defaultProvider.productList)
    const [itemDetalle, setItemDetalle] = useState<DetailItemType | null>(defaultProvider.itemDetalle)

    const handleSearch = ({ search }: handleSearchTypes, errorCallback?: ErrCallbackType) => {
        setLoading(true)
        axios
            .get<SearchResultType>(appConfig.searchEndPoint + search)
            .then(response => {
                setProductList({ ...response.data })
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                if (errorCallback) {
                    errorCallback(err)
                }

            })
    }

    const handleItemDetail = ({ id }: handleDetalleTypes, errorCallback?: ErrCallbackType) => {
        setLoading(true)
        axios
            .get<DetailItemType>(appConfig.deteailItemEnpoint + id)
            .then(response => {
                setLoading(false)
                setItemDetalle({ ...response.data })
            })
            .catch(err => {
                setLoading(false)
                if (errorCallback) {
                    errorCallback(err)
                }
            })
    }

    const values: AppValuesType = {
        loading,
        SearchProduct: handleSearch,
        productList,
        itemDetalle,
        GetItemDetalle: handleItemDetail
    }

    return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}
export const AppConsumer = AppContext.Consumer