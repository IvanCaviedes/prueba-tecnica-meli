import { ResponseDetail, ResponseDetailDescription } from "./ItemsDescriptionTypes";

export enum ConditionEnum {
    used = "Usado",
    new = "Nuevo",
}

export interface AuthorType {
    name: String;
    lastname: String;
}

export interface ProductPriceType {
    currency: String;
    amount: Number;
    decimals: Number;
}

export interface ProductDataType {
    id: String;
    tittle: String;
    picture: String;
    price: ProductPriceType;
    condition: ConditionEnum;
    free_shipping: Boolean;
}

export interface ProductDataDetailType extends ProductDataType {
    sold_quantity: number;
    description: string;
}

export type requestDetailType = [Promise<ResponseDetail>, Promise<ResponseDetailDescription>]

export interface SearchResultType {
    author: AuthorType;
    items: ProductDataType[];
    categories: string[]
}

export interface DetailItemType {
    author: AuthorType;
    item: ProductDataDetailType
}