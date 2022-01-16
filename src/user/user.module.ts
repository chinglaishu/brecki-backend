import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';
import { ConfigModule } from 'src/config/config.module';
import { SystemMatchModule } from 'src/systemMatch/systemMatch.module';
import { ManualMatchModule } from 'src/manualMatch/manualMatch.module';
import { MatchModule } from 'src/match/match.module';
import { SystemMatch, SystemMatchSchema } from 'src/systemMatch/entities/systemMatch.entity';
import { ManualMatch, ManualMatchSchema } from 'src/manualMatch/entities/manualMatch.entity';
import { Match, MatchSchema } from 'src/match/entities/match.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: SystemMatch.name, schema: SystemMatchSchema },
      { name: ManualMatch.name, schema: ManualMatchSchema },
      { name: Match.name, schema: MatchSchema },
    ]),
    forwardRef(() => SystemMatchModule),
    forwardRef(() => MatchModule),
    forwardRef(() => ManualMatchModule),
    ConfigModule,
  ],    
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
