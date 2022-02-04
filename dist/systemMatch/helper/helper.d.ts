declare const systemMatchHelper: {
    checkTime(time: Date, requiredMinuteDiff: number): boolean;
    getMatchUserPersonalInfoField(): {
        personalInfo: {
            name: number;
            ageRange: number;
            sex: number;
            location: number;
            profilePicOneUrl: number;
            profilePicTwoUrl: {
                blurMore: number;
            };
        };
        personalityScore: number;
    };
    getProfilePicTwoUrl(intimacy: number): {
        clear: number;
        blurLess?: undefined;
        blurMore?: undefined;
    } | {
        blurLess: number;
        clear?: undefined;
        blurMore?: undefined;
    } | {
        blurMore: number;
        clear?: undefined;
        blurLess?: undefined;
    };
    getMatchUserPersonalInfoFieldByIntimacy(intimacy: number): {
        personalInfo: {
            name: number;
            ageRange: number;
            sex: number;
            location: number;
            profilePicOneUrl: number;
            profilePicTwoUrl: {
                clear: number;
                blurLess?: undefined;
                blurMore?: undefined;
            } | {
                blurLess: number;
                clear?: undefined;
                blurMore?: undefined;
            } | {
                blurMore: number;
                clear?: undefined;
                blurLess?: undefined;
            };
        };
        personalityScore: number;
    };
};
export default systemMatchHelper;
