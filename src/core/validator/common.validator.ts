import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { DTO_CHECK_ADMIN_FIELD_KEY, DTO_TYPE_NUM_KEY } from "src/constant/constant";
import { ROLE_NUM } from "src/constant/constant";

export const checkAdminConstraint = (args: ValidationArguments) => {
  const {object, constraints} = args;
  if (!constraints) {return true; }
  const isCheckAdmin = constraints.includes(DTO_CHECK_ADMIN_FIELD_KEY);
  if (!isCheckAdmin) {return true; }
  const typeNum = object[DTO_TYPE_NUM_KEY];
  return typeNum === ROLE_NUM.ADMIN;
};

@ValidatorConstraint({name: "adminOnlyField", async: false})
export class AdminFieldConfirmConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    return checkAdminConstraint(args);
  }
  
  defaultMessage() {
    return "only admin field";
  }
}

@ValidatorConstraint({name: "userIdField", async: false})
export class UserIdConfirmConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    if (!checkAdminConstraint(args)) {
      delete (args.object as any).userId;
    }
    return true;
  }
}
