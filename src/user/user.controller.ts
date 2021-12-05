import { Controller, Get, Post, Body, Param, Delete, Query, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto, UploadProfilePicDTO } from './dto/update-user.dto';
import { BaseController } from 'src/utils/base/base.controller';
import { Public } from 'src/core/decorator/public.decorator';
import { UserFilterOption } from 'src/core/filter/filter';
import { ReqUser } from 'src/core/decorator/user.decorator';
import { User } from './entities/user.entity';
import { Filter } from 'src/core/decorator/filter.decorator';
import { PageOption, Pagination } from 'src/core/decorator/pagination.decorator';
import { Roles } from 'src/core/authorization/role.decorator';
import { Role } from 'src/core/authorization/role.enum';
import { Sort } from 'src/core/decorator/sort.decorator';
import { Search, SearchOption } from 'src/core/decorator/search.decorator';
import { LANGUAGE, S3_PROFILE_PIC_ONE_PATH, S3_PROFILE_PIC_TWO_BLUR_LESS_PATH, S3_PROFILE_PIC_TWO_BLUR_MORE_PATH, S3_PROFILE_PIC_TWO_CLEAR_PATH } from 'src/constant/constant';
import { Lang } from 'src/core/decorator/lang.decorator';
import { uploadImage } from 'src/core/uploadImage/uploadImage';
import { ProfilePicTwoUrl } from 'src/utils/base/base.entity';
import { changeImageAndGetBuffer } from 'src/utils/utilsFunction/imageHandler';

var Jimp = require("jimp");
var path = require('path');

@Controller('user')
export class UserController extends BaseController<CreateUserDto, UpdateUserDto, UserFilterOption> {

  constructor(
    public service: UserService,
  ) {
    super(service);
  }

  @Get('self')
  findSelf(@ReqUser() user: User) {
    return user;
  }

  @Roles(Role.Admin)
  @Get()
  findAll(@ReqUser() user: User, @Filter() filter: UserFilterOption, @Pagination() pagination: PageOption, @Sort() sort: any, @Search() search: SearchOption) {
    const {page, pageSize} = pagination;
    const {searchFilter} = search;
    filter = {...filter, ...searchFilter};
    return this.service.findAll(filter, page, pageSize, null, sort);
  }

  @Roles(Role.Admin)
  @Post()
  async create(@ReqUser() user: User, @Body() createDto: CreateUserDto, @Lang() lang: LANGUAGE) {
    const result = await this.service.create(createDto);
    return result;
  }

  @Get(':id')
  async findOne(@ReqUser() user: User, @Param('id') id: string) {
    await this.service.checkIsIdOfUser(user, id);
    return this.service.findOne(id);
  }
  
  @Public()
  @Get('/item-exist')
  async checkItemExist(@Filter() filter: UserFilterOption, @Lang() lang: LANGUAGE) {
    const count = await this.service.count(filter);
    return count > 0;
  }

  @Put(':id')
  async update(@ReqUser() user: User, @Param('id') id: string, @Body() updateDto: UpdateUserDto) {
    await this.service.checkIsIdOfUser(user, id);
    const result = await this.service.update(id, updateDto);
    return result;
  }

  @Delete(':id')
  async remove(@ReqUser() user: User, @Param('id') id: string) {
    await this.service.checkIsIdOfUser(user, id);
    return this.service.remove(id);
  }

  @Post("upload/profile-pic-one")
  async uploadProfilePicOne(@Body() body: UploadProfilePicDTO) {
    const {base64, fileType} = body;
    // const useBase64ForBuffer = base64.replace(/^data:image\/\w+;base64,/, "");
    const buffer = Buffer.from(base64, "base64");
    const result: any = await uploadImage(S3_PROFILE_PIC_ONE_PATH, fileType, buffer);
    return result.Location;
  }

  @Post("upload/profile-pic-two")
  async uploadProfilePicTwo(@Body() body: UploadProfilePicDTO) {
    const {base64, fileType} = body;
    const buffer = Buffer.from(base64, "base64");
    const image = await Jimp.read(buffer);
    const blurLessBuffer = await changeImageAndGetBuffer(image, 1);
    const blurMoreBuffer = await changeImageAndGetBuffer(image, 4);

    const uploadClearResult: any = await uploadImage(S3_PROFILE_PIC_TWO_CLEAR_PATH, fileType, buffer);
    const uploadBlurLessResult: any = await uploadImage(S3_PROFILE_PIC_TWO_BLUR_LESS_PATH, "png", blurLessBuffer);
    const uploadBlurMoreResult: any = await uploadImage(S3_PROFILE_PIC_TWO_BLUR_MORE_PATH, "png", blurMoreBuffer);

    const profilePicTwoUrl: ProfilePicTwoUrl = {
      clear: uploadClearResult.Location,
      blurLess: uploadBlurLessResult.Location,
      blurMore: uploadBlurMoreResult.Location,
    }

    return profilePicTwoUrl;
  }

  @Get("question-review/random-user")
  async getRandomForQuestionReview(@ReqUser() user: User) {
    return await this.service.getRandomUserWithPerference(user);
  } 
}
