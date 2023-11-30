import { PartialType } from '@nestjs/mapped-types';
import { CreateTeamDto } from './create-team.dto';
import { IsString, IsArray, IsNotEmpty, IsOptional } from "class-validator"

export class UpdateTeamDto extends PartialType(CreateTeamDto) {
    @IsString()
    @IsNotEmpty()
    _id: string

    @IsString()
    @IsNotEmpty()
    _rev: string

    @IsString()
    @IsNotEmpty()
    name: string

    @IsArray()
    @IsOptional()
    members: Array<any>
}
