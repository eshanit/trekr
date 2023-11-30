import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): import("rxjs").Observable<any>;
    findAll(): import("rxjs").Observable<any>;
    findOne(email: string): Promise<{
        id: string;
        firstname: string;
        lastname: string;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
    findCDBUser(userId: string): Promise<import("rxjs").Observable<any>>;
    updateCDBUser(userId: string, updateUserDto: UpdateUserDto): import("rxjs").Observable<any>;
}
