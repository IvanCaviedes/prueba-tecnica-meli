import { IsNotEmpty, IsString } from 'class-validator'
export class SearchParamDTO {
  @IsNotEmpty()
  @IsString()
  public search: string
}
