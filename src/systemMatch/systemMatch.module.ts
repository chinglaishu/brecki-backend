import { Module } from '@nestjs/common';
import { SystemMatchService } from './systemMatch.service';
import { SystemMatchController } from './systemMatch.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SystemMatch, SystemMatchSchema } from './entities/systemMatch.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SystemMatch.name, schema: SystemMatchSchema },
    ]),
    UserModule,
  ],
  controllers: [SystemMatchController],
  providers: [SystemMatchService],
  exports: [SystemMatchService],
})
export class SystemMatchModule {}
