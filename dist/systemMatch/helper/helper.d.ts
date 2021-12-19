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
    };
};
export default systemMatchHelper;
