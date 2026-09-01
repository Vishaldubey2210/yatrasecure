import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TripsModule } from './trips/trips.module';
import { ChatModule } from './chat/chat.module';
import { ExpensesModule } from './expenses/expenses.module';
import { WalletModule } from './wallet/wallet.module';
import { MembersModule } from './members/members.module';
import { NotificationsModule } from './notifications/notifications.module';
import { JoinRequestsModule } from './join-requests/join-requests.module';
import { CommonModule } from './common/common.module';
import { PrismaModule } from './prisma/prisma.module';
import { UploadModule } from './upload/upload.module';
import { EmailModule } from './email/email.module';
import { SocialModule } from './social/social.module';
import { SafetyModule } from './safety/safety.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    CommonModule,
    AuthModule,
    UsersModule,
    TripsModule,
    ChatModule,
    ExpensesModule,
    WalletModule,
    MembersModule,
    NotificationsModule,
    JoinRequestsModule,
    UploadModule,
    EmailModule,
    SocialModule,
    SafetyModule,
    HealthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
