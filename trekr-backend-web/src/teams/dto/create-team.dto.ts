import { IsString, IsArray, IsNotEmpty, IsOptional } from "class-validator"

export class CreateTeamDto {
    @IsString()
    @IsNotEmpty()
    _id: string

    @IsString()
    @IsNotEmpty()
    name: string

    @IsArray()
    @IsOptional()
    members: Array<object>
}
