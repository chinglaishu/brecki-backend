import { CONFIG_TYPE_NUM, MESSAGE_METHOD_NUM } from '../../constant/constant';
import { MultiLang } from 'src/utils/base/base.entity';
export declare class CreateConfigDto {
    typeNum: CONFIG_TYPE_NUM;
    name: string;
    messageMethodNum: MESSAGE_METHOD_NUM;
    subject: MultiLang;
    content: MultiLang;
}
