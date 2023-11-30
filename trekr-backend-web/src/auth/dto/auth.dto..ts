import { IsString, IsEmail, IsNotEmpty, IsOptional } from "class-validator"

export class AuthDto {
    @IsString()
    @IsOptional()
    firstname: string

    @IsString()
    @IsOptional()
    lastname: string

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    password: string
}