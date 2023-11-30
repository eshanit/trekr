import { IsString, IsArray, IsNotEmpty, IsOptional, IsEmail } from "class-validator"

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    _id: string
    
    
    @IsString()
    @IsNotEmpty()
    firstname: string

    @IsString()
    @IsNotEmpty()
    lastname: string


    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    gender: string

    @IsString()
    @IsNotEmpty()
    dateJoined: string

    @IsArray()
    @IsNotEmpty()
    teams: string

    @IsString()
    @IsOptional()
    mobile: string

}
