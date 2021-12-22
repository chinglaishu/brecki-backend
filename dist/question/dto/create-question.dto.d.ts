import { MultiLang, QuestionChoice } from 'src/utils/base/base.entity';
export declare class CreateQuestionDto {
    title?: MultiLang;
    questionChoices?: QuestionChoice[];
    questionChoiceIds: string[];
    defaultPersonalityKeys?: string[];
}
