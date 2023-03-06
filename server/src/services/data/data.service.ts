import { Injectable } from '@nestjs/common'

// Types
import { Filter, Result } from 'src/services/types/Searchtypes'

import {
  ResponseDetail,
  ResponseDetailDescription,
} from 'src/services/types/ItemsDescriptionTypes'

import {
  ProductDataType,
  ConditionEnum,
  ProductDataDetailType,
  AuthorType,
} from '../types'

@Injectable()
export class DataService {
  getAuthor(): AuthorType {
    return {
      name: 'Ivan',
      lastname: 'Caviedes',
    }
  }

  getItems(result: Result[]): ProductDataType[] {
    return result.map((item) => {
      return {
        id: item.id,
        tittle: item.title,
        picture: item.thumbnail,
        price: {
          amount: item.price,
          currency: item.currency_id,
          decimals: 0,
        },
        condition: ConditionEnum[item.condition],
        free_shipping: item.shipping.free_shipping,
        location: item.address.state_name,
      }
    })
  }

  getCategories(filter: Filter[]): string[] {
    const categories = filter.find((item) => item.id === 'category')
    return categories?.values.map((item) => item.name) || []
  }

  getItem(
    item: ResponseDetail,
    description: ResponseDetailDescription,
  ): ProductDataDetailType {
    return {
      id: item.id,
      tittle: item.title,
      picture: item.pictures[0].url,
      price: {
        amount: item.price,
        currency: item.currency_id,
        decimals: 0,
      },
      condition: ConditionEnum[item.condition],
      free_shipping: item.shipping.free_shipping,
      sold_quantity: item.sold_quantity,
      description: description.plain_text,
    }
  }
}
