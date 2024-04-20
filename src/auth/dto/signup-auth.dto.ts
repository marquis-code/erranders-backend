import { UserRole } from '../enums/user-role.enum';
export class SignupUserDto {
  readonly firstname: string;
  readonly lastname: string;
  readonly email: string;
  readonly password: string;
  readonly role: UserRole;
}
