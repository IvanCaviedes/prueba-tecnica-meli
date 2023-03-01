import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { DataService } from './data/data.service';
import { Response } from "./types/Searchtypes";
import { DetailItemType, requestDetailType, SearchResultType } from './types';

@Injectable()
export class AppService {

  BaseUrl: string = 'https://api.mercadolibre.com/'

  constructor(
    private readonly httpService: HttpService,
    private readonly dataService: DataService
  ) { }

  async GetSearch(query: string = "iphone"): Promise<SearchResultType> {
    let { data } = await this.httpService.axiosRef.get<Response>(this.BaseUrl + `sites/MLA/search?q=${query}`)
    return {
      author: this.dataService.getAuthor(),
      items: this.dataService.getItems(data.results),
      categories: this.dataService.getCategories(data.filters)
    }
  }

  async getDetailItem(id: string = "MLA1320257270"): Promise<DetailItemType> {
    let urls: string[] = ['items/:id', 'items/:id/description']
    const requests = urls.map((url) => {
      url = url.replace(':id', id)
      return this.httpService.axiosRef.get(this.BaseUrl + url).then(response => response.data)
    });
    const [detail, description] = await Promise.all(requests as requestDetailType)
    return {
      author: this.dataService.getAuthor(),
      item: this.dataService.getItem(detail, description)
    }
  }

}
