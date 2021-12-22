import { User } from "src/user/entities/user.entity";
import { PersonalityScore } from "src/utils/base/base.entity";
import { Personality } from "../entities/personality.entity";
declare const personalityHelper: {
    getBasePersonality(personalities: Personality[]): any;
    getNewScore(user: User, newPersonalityScore: PersonalityScore): {
        [x: string]: number;
    };
    addUpPersonalityScore(scoreA: PersonalityScore, scoreB: PersonalityScore): void;
};
export default personalityHelper;
