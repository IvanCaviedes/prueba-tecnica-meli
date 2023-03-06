import {
  ResponseDetail,
  ResponseDetailDescription,
} from './ItemsDescriptionTypes'

export enum ConditionEnum {
  used = 'Usado',
  new = 'Nuevo',
}

export interface AuthorType {
  name: string
  lastname: string
}

export interface ProductPriceType {
  currency: string
  amount: number
  decimals: number
}

export interface ProductDataType {
  id: string
  tittle: string
  picture: string
  price: ProductPriceType
  condition: ConditionEnum
  free_shipping: boolean
  location?: string
}

export interface ProductDataDetailType extends ProductDataType {
  sold_quantity: number
  description: string
}

export type requestDetailType = [
  Promise<ResponseDetail>,
  Promise<ResponseDetailDescription>,
]

export interface SearchResultType {
  author: AuthorType
  items: ProductDataType[]
  categories: string[]
}

export interface DetailItemType {
  author: AuthorType
  item: ProductDataDetailType
}
