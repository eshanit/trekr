import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config/dist';
import { User } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
export declare class UsersService {
    private prisma;
    private readonly httpService;
    private configService;
    constructor(prisma: PrismaService, httpService: HttpService, configService: ConfigService);
    create(createUserDto: CreateUserDto): Observable<any>;
    findAll(): Observable<AxiosResponse<User[]> | any>;
    findOne(email: string): Promise<{
        id: string;
        firstname: string;
        lastname: string;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
    findCDBUser(userId: string): Promise<Observable<any>>;
    updateCDBUser(userId: string, updateUserDto: UpdateUserDto): Observable<any>;
}
