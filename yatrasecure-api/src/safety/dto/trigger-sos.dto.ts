import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class TriggerSosDto {
  @IsNotEmpty()
  @IsNumber()
  lat: number;

  @IsNotEmpty()
  @IsNumber()
  lng: number;

  @IsOptional()
  @IsString()
  tripId?: string;

  @IsOptional()
  @IsString()
  message?: string;

  @IsOptional()
  @IsString()
  emergencyType?: 'medical' | 'danger' | 'accident' | 'lost' | 'general' = 'danger';
}
