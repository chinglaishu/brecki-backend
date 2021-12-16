import { Module } from '@nestjs/common';
import { ManualMatchService } from './manualMatch.service';
import { ManualMatchController } from './manualMatch.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ManualMatch, ManualMatchSchema } from './entities/manualMatch.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ManualMatch.name, schema: ManualMatchSchema },
    ]),
  ],
  controllers: [ManualMatchController],
  providers: [ManualMatchService],
  exports: [ManualMatchService],
})
export class ManualMatchModule {}
