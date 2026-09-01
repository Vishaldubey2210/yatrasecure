import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class SettleExpenseDto {
  @IsNotEmpty()
  @IsString()
  tripId: string;

  @IsNotEmpty()
  @IsString()
  fromUserId: string;

  @IsNotEmpty()
  @IsString()
  toUserId: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  amount: number;

  @IsNotEmpty()
  @IsString()
  paymentMethod: string; // e.g. 'UPI', 'Cash', 'Bank Transfer'
}
