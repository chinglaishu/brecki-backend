import { LANGUAGE } from "src/constant/constant";
import { PageOption } from "src/core/decorator/pagination.decorator";
import { SearchOption } from "src/core/decorator/search.decorator";
import { User } from "src/user/entities/user.entity";
import { BaseService } from "./base.service";
export declare class BaseController<CreateDto, UpdateDto, FilterOption> {
    service: BaseService<CreateDto, UpdateDto, FilterOption>;
    findOneCheckUser: boolean;
    findAllCheckUser: boolean;
    updateCheckUser: boolean;
    readOnly: boolean;
    constructor(service: BaseService<CreateDto, UpdateDto, FilterOption>, findOneCheckUser?: boolean, findAllCheckUser?: boolean, updateCheckUser?: boolean, readOnly?: boolean);
    create(user: User, createDto: CreateDto, lang: LANGUAGE): Promise<any>;
    findAll(user: User, filter: FilterOption, pagination: PageOption, sort?: any, search?: SearchOption): Promise<import("./base.entity").PaginationEntity>;
    findOne(user: User, id: string): Promise<any>;
    findAllWithoutPagination(user: User, filter: FilterOption, sort?: any, search?: SearchOption): Promise<any>;
    update(user: User, id: string, updateDto: UpdateDto, lang: LANGUAGE): Promise<any>;
    remove(user: User, id: string, lang: LANGUAGE): Promise<any>;
}
