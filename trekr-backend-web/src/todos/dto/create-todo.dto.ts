import { IsString, IsArray, IsNotEmpty, IsOptional } from "class-validator"

export class CreateTodoDto {
    @IsString()
    @IsNotEmpty()
    _id: string

    @IsString()
    @IsNotEmpty()
    user_id: string

    @IsArray()
    @IsNotEmpty()
    todos: Array<object>

}
