import { ProductDataType } from "data/types";
import { ReactNode } from "react";

export interface AuthorType {
    name: String;
    lastname: String;
}

export interface SearchResultType {
    author: AuthorType;
    items: ProductDataType[];
    categories: string[]
}

export interface AppProviderProps {
    children: ReactNode
}

export type AppContextValue = {

}
export type handleSearchTypes = {
    search: string
}
export type handleDetalleTypes = {
    id: string
}

export interface ProductDataDetailType extends ProductDataType {
    sold_quantity: number;
    description: string;
}

export interface DetailItemType {
    author: AuthorType;
    item: ProductDataDetailType
}


export type ErrCallbackType = (err: { [key: string]: string }) => void

export type AppValuesType = {
    loading: boolean,
    productList: SearchResultType | null,
    SearchProduct: (params: handleSearchTypes, errorCallback?: ErrCallbackType) => void
    GetItemDetalle: (params: handleDetalleTypes, errorCallback?: ErrCallbackType) => void
    itemDetalle: DetailItemType | null
}





