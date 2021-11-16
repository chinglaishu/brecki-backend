declare const crypt: {
    hashPassword(password: string): Promise<string>;
    comparePasswordAndHash(password: string, hash: string, throwErrorIfNotMatch?: boolean): Promise<boolean>;
};
export default crypt;
