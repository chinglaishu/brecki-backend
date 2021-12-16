import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { SystemMatchService } from './systemMatch.service';
import { CreateSystemMatchDto } from './dto/create-systemMatch.dto';
import { UpdateSystemMatchDto } from './dto/update-systemMatch.dto';
import { BaseController } from 'src/utils/base/base.controller';
import { SystemMatchFilterOption } from 'src/core/filter/filter';
import { ReqUser } from 'src/core/decorator/user.decorator';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Controller('systemMatch')
export class SystemMatchController extends BaseController<CreateSystemMatchDto, UpdateSystemMatchDto, SystemMatchFilterOption> {

  constructor(
    public service: SystemMatchService,
    public userService: UserService,
  ) {
    super(service);
  }

  @Post("request")
  async requestSystemMatch(@ReqUser() user: User) {
    return await  
  }
}
