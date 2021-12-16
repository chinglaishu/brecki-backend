import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { ManualMatchService } from './manualMatch.service';
import { CreateManualMatchDto } from './dto/create-manualMatch.dto';
import { UpdateManualMatchDto } from './dto/update-manualMatch.dto';
import { BaseController } from 'src/utils/base/base.controller';
import { ManualMatchFilterOption } from 'src/core/filter/filter';

@Controller('manualMatch')
export class ManualMatchController extends BaseController<CreateManualMatchDto, UpdateManualMatchDto, ManualMatchFilterOption> {

  constructor(
    public service: ManualMatchService,
  ) {
    super(service);
  }
}
