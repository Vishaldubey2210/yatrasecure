import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';
import { Public } from '../common/decorators/public.decorator';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Public()
  @Get()
  async getHealth() {
    return this.healthService.checkHealth();
  }

  @Public()
  @Get('ping')
  ping() {
    return { status: 'ok', time: new Date().toISOString() };
  }
}
