import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { UsersService } from 'src/users/users.service';
import { Observable } from 'rxjs';
export declare class TodosService {
    private users;
    constructor(users: UsersService);
    create(createTodoDto: CreateTodoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTodoDto: UpdateTodoDto): string;
    remove(id: number): string;
    findTodosForUser(userId: string): Promise<Observable<any>>;
}
