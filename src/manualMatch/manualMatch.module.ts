import { Module } from '@nestjs/common';
import { ManualMatchService } from './manualMatch.service';
import { ManualMatchController } from './manualMatch.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ManualMatch, ManualMatchSchema } from './entities/manualMatch.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ManualMatch.name, schema: ManualMatchSchema },
    ]),
    UserModule,
  ],
  controllers: [ManualMatchController],
  providers: [ManualMatchService],
  exports: [ManualMatchService],
})
export class ManualMatchModule {}
