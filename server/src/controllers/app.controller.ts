import { Controller, Get, Query, Param } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { SearchParamDTO } from 'src/Dto/SearchParamDto';

@Controller('/api/items')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/')
  getSearchResult(@Query() { search }: SearchParamDTO) {
    return this.appService.GetSearch(search);
  }


  @Get('/:id')
  getDetail(@Param('id') id: string) {
    return this.appService.getDetailItem(id);
  }

}
