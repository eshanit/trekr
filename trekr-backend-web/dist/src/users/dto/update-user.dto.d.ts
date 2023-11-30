import { CreateUserDto } from './create-user.dto';
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    _id: string;
    _rev: string;
    firstname: string;
    lastname: string;
    email: string;
    gender: string;
    dateJoined: string;
    teams: string;
    mobile: string;
}
export {};
