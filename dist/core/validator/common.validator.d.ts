import { ValidationArguments, ValidatorConstraintInterface } from "class-validator";
export declare const checkAdminConstraint: (args: ValidationArguments) => boolean;
export declare class AdminFieldConfirmConstraint implements ValidatorConstraintInterface {
    validate(value: any, args: ValidationArguments): boolean;
    defaultMessage(): string;
}
export declare class UserIdConfirmConstraint implements ValidatorConstraintInterface {
    validate(value: any, args: ValidationArguments): boolean;
}
