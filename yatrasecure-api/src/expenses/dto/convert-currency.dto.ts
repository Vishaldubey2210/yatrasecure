import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class ConvertCurrencyDto {
  @IsNotEmpty()
  @IsNumber()
  @Min(0.01)
  amount: number;

  @IsNotEmpty()
  @IsString()
  fromCurrency: string;

  @IsNotEmpty()
  @IsString()
  toCurrency: string;
}
