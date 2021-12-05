import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { PersonalityService } from './personality.service';
import { CreatePersonalityDto } from './dto/create-personality.dto';
import { UpdatePersonalityDto } from './dto/update-personality.dto';
import { BaseController } from 'src/utils/base/base.controller';
import { PersonalityFilterOption } from 'src/core/filter/filter';

@Controller('personality')
export class PersonalityController extends BaseController<CreatePersonalityDto, UpdatePersonalityDto, PersonalityFilterOption> {

  constructor(
    public service: PersonalityService,
  ) {
    super(service);
    this.findOneCheckUser = false;
    this.findAllCheckUser = false;
    this.updateCheckUser = false;
  }
}
