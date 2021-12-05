import { Module } from '@nestjs/common';
import { PersonalityService } from './personality.service';
import { PersonalityController } from './personality.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Personality, PersonalitySchema } from './entities/personality.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Personality.name, schema: PersonalitySchema },
    ]),
  ],
  controllers: [PersonalityController],
  providers: [PersonalityService],
  exports: [PersonalityService],
})
export class PersonalityModule {}
