import { MultiLang, QuestionChoice } from 'src/utils/base/base.entity';
export declare class CreateQuestionDto {
    title?: MultiLang;
    Choices?: QuestionChoice[];
    defaultPersonalityKeys?: string[];
}
