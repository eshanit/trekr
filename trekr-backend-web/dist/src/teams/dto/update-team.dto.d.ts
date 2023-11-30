import { CreateTeamDto } from './create-team.dto';
declare const UpdateTeamDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTeamDto>>;
export declare class UpdateTeamDto extends UpdateTeamDto_base {
    _id: string;
    _rev: string;
    name: string;
    members: Array<any>;
}
export {};
