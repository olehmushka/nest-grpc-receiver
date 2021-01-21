import { Module } from '@nestjs/common';
import { ContactModule } from './contact/contact.module';
import { UserModule } from './user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ContactModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
