import { User } from 'src/user/entities/user.entity';
import { PaginationEntity } from "./base.entity";
import { BaseFilterOption } from 'src/core/filter/filter';
export declare class BaseService<CreateDto, UpdateDto, FilterOption extends BaseFilterOption> {
    model: any;
    createAddUserId: boolean;
    populates: string[];
    constructor(model: any, createAddUserId?: boolean, populates?: string[]);
    create(createDto: CreateDto, user?: User): Promise<any>;
    findAll(filter: FilterOption, page: number, pageSize: number, checkIfAddUserIdByUser?: User | null, sort?: any): Promise<PaginationEntity>;
    findAllWithoutFilter(): Promise<any>;
    findOne(id: string, throwErrorIfNotFound?: boolean, checkBelongToUser?: User | null): Promise<any>;
    findOneWithFilter(filter: FilterOption, throwErrorIfNotFound?: boolean): Promise<any>;
    count(filter: FilterOption): Promise<any>;
    countAndError(filter: FilterOption, errMessage?: string): Promise<any>;
    update(id: string, updateDto: UpdateDto, throwErrorIfNotFound?: boolean, checkBelongToUser?: User | null): Promise<any>;
    remove(id: string, throwErrorIfNotFound?: boolean, checkBelongToUser?: User | null): Promise<any>;
    createFilterForTime(filter: FilterOption): FilterOption;
    getFilterByIfCheckBelongToUser(id: string, checkBelongToUser: User | null): {
        _id: string;
    };
    populateExecList(results: any): Promise<any>;
    populateExec(result: any): Promise<any>;
}
